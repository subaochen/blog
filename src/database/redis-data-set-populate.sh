#!/bin/bash
# 1万条set测试数据elements中包含了1万个元素1..100000
elements=""
for i in `seq 1 10000`
do
    elements="$elements s-"${i}
    if [[ $((i%1000)) == 0 ]];
    then
        echo $elements
        redis-cli sadd elements ${elements}
        elements=""
    fi
done

