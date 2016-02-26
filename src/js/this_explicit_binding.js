function foo(){
    console.log(this.a);
}

var obj = {a:2};
foo.call(obj); // |\longremark{obj对象中并没有定义foo属性，这里之所以能够执行是因为call间接调用函数相当于下列三条语句：obj.m = foo;obj.m();delete obj.m;也就是说，call和apply实际上首先创建临时属性指向了指定的方法，在执行完毕后随机删除临时属性}|
//|\showremarks|
