var a = 10;
function foo(){
  console.log(a);
  for(var i = 1; i <= 2; i++) {
    (function IIFE(){
      var j = i;
      setTimeout(function  timer(){
        console.log(j);
      },j * 1000);
    })();
  }
}

foo();

