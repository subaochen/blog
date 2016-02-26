function foo(something){
    //console.log(this.a + something);
    return this.a + something;
}

var obj = {a:2};

function bind(fn,obj){
    return function(){
        return fn.apply(obj,arguments);
    }
};

var bar = bind(foo,obj);
console.log(bar(3));
