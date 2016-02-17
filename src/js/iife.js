var a = 10;
function foo(){
    console.log("hello from function foo");
}
foo(); // |\longremark{调用函数foo}|

var foo = function(){
    console.log("hello from anno function");
};
foo(); // |\longremark{通过foo调用匿名函数}|

var foo = function x(){
    console.log("hello from function x");
};

foo(); // |\longremark{通过foo调用函数x}|

(function(){
    var a = 20; // |\longremark{通过IIFE方式定义的变量a只在IIFE函数范围内有效，不会污染其他命名空间}|
    console.log(a); // |\longremark{输出局部变量a的值}|
    console.log("hello from anno iife!");
})(); // |\longremark{IIFE方式执行匿名函数，同时创建了一个function scope}|

console.log(a); // |\longremark{输出全局变量a的值}|

(function foo(){
    console.log("hello from foo iife!");
})(); // |\longremark{IIFE方式执行函数foo，同时创建了一个function scope}|

//|\showremarks|
