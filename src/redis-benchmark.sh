#!/bin/sh
# 每次测试都要清空数据，防止相互影响
#DATA_SIZE=$1
# 测试数据增长步长
STEP=100
for i in `2 ${STEP} 10000`; do
    if( $i gt 1000 ); then
        STEP=500
    fi
    echo "step $i"
    #redis-cli  flushall
    #redis-benchmark -P 16 -r 100000 -n 1000000 -t set -d $DATA_SIZE
done
