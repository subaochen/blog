var myObject = {
  get a(){
    return this._a_ * 2;
  },

  set a(val){
    this._a_ = val;
  }
};

myObject.a = 2;
console.log(myObject.a); // 4
