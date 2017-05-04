#!/bin/bash
FIRST=2
FINAL=300
FACTOR=10
data_size=$FIRST
SEQUENCE=""
while [ $data_size -le $FINAL ]
do
    SEQUENCE=${SEQUENCE}" "${data_size};
    #echo $SEQUENCE;
    step=$[$data_size / $FACTOR];
    if [ $step -le 10 ]; then
        step=10
    fi
    data_size=$[$data_size + $step];
done

for i in $SEQUENCE; do
    echo $i
done
