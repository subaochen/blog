#!/bin/bash
# 键空间
KEYSPACE=100000
# 总测试次数
TOTAL_REQUESTS=1000000
# pipeline数量，如果不使用pipeline则留空
PIPELINES=8
# 首先清空benchmark数据文件
cp /dev/null  redis-benchmark.dat
function benchmark() {
    data_size=$1
    redis-cli  flushall > /dev/null
    if [ x"$PIPELINES" != "x" ];then 
        with_pipeline="-P $PIPELINES"
    fi
    benchmark_cmd="redis-benchmark $with_pipeline -r $KEYSPACE -n $TOTAL_REQUESTS -t set -d $data_size"
    qts=`$benchmark_cmd | grep "requests per second" | awk '{print $1}'`
    echo "$data_size,$qts" | tee -a redis-benchmark.dat
}

STEP=100
for i in `seq 2 $STEP 500`; do
    benchmark $i;
done

STEP=500
for i in `seq 5000 $STEP 30000`; do
    benchmark $i;
done

