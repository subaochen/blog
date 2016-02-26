function foo(something){
    console.log(this.a + something);
    return this.a + something;
}

var obj = {a:2};

var bar = function (arguments){
    foo.apply(obj,arguments);
};

console.log(bar(3));
//console.log(bar());
