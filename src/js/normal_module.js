function myModule(){
  var someThing = "123";
  var otherThing = [1,2,3];

  function doSomeThing(){
    console.log(someThing);
  }

  function doOtherThing(){
    console.log(otherThing);
  }

  return {
    doSomeThing:doSomeThing,
    doOtherThing:doOtherThing
  }
}

var foo = myModule();
foo.doSomeThing();
foo.doOtherThing();

var foo1 = myModule();
foo1.doSomeThing();
