var a = 10;

foo();//|\longremark{可以正常调用，这是hoisted function}|

function foo(){
    console.log("before define variable a in function:" + a); //|\longremark{局部变量a此时已经定义了，但是还没有赋值：undifined}|
    var a = 20; //|\longremark{局部变量a设置为20，并且变量的作用范围被hoisted到函数的开头}|
    console.log("after difine variable a in function:" + a); // |\longremark{输出局部变量a的值：20}|
}

//|\showremarks|
