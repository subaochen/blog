var a = 10;
function foo(){
  console.log(a);
  for(var i = 1; i <= 2; i++) {
    (function IIFE(j){
      setTimeout(function  timer(){
        console.log(j);
      },j * 1000);
    })(i);
  }
}

foo();

