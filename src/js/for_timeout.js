var a = 10;
function foo(){
    console.log(a);
    for(var i = 1; i <= 2; i++) {
        setTimeout(function  timer(){
            console.log(i);
        },i * 1000);
    }
}

foo();

