function foo(something){
    //console.log(this.a + something);
    return this.a + something;
}

var obj = {a:2};

var bar = function (){
    return foo.apply(obj,arguments); // @TODO where arguments from?
};

var baz = bar(3);
console.log(baz);
console.log(bar());
