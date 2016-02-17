// 闲的蛋疼的破例子
function makeAdder(x){
    function add(y){
        return y + x;
    }

    return add;
}

var plusOne = makeAdder(1);
var plusTen = makeAdder(10);

console.log(plusOne(2));
console.log(plusOne(13));
console.log(plusTen(13));
