var myArray = [1,2,3];
for(var i = 0; i < myArray.length; i++){
  console.log(myArray[i]);
}

for(var i in myArray){
  console.log(myArray[i]);
}

// since ES6
for(var v of myArray){
  console.log(v);
}

