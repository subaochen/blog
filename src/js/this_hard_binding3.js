function foo(something){
    //console.log(this.a + something);
    return this.a + something;
}

var obj = {a:2};

var bar = foo.bind(obj);
console.log(bar(3));
