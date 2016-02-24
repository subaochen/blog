(foo = function (){
  var a = 10;
  console.log(a);
})();


console.log(foo);

(foo = function (){
  var b = 20;
  console.log(b);
})();

console.log(foo);
