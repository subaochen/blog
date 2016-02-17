var a = 10;

foo();//|\longremark{可以正常调用，这是hoisted function}|

function foo(){
    console.log("before define variable a in function:" + a); //|\longremark{使用全局变量a，值为10}|
    a = 20; //|\longremark{全局变量a设置为20}|
    console.log("after difine variable a in function:" + a);
}

//|\showremarks|
