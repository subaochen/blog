function foo(){
    console.log(this.a);
}

var a = 2; // remove var inside node.js
foo(); // 2
