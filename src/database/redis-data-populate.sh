#!/bin/sh
# 100万条测试数据
for i in `seq 1 1000000`
do
    echo key:${i}=\>value:${i}
    redis-cli set key:${i} value:${i}
done

