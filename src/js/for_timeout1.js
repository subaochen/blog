var a = 10;
function foo(){
    console.log(a);
    var i = 1;
    setTimeout(function timer(){
        console.log(i);
    },i * 1000);
    i++;
    setTimeout(function timer(){
        console.log(i);
    },i * 1000);
    i++;
}

foo();
