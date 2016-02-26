function foo(){
    console.log(this.a);
}

var obj = {
    a:2,
    foo:foo
};

var bar = obj.foo;
var a = "hello"; // remove var when running on node.js
obj.foo(); // 2
bar(); // hello
