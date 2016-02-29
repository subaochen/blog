var prefix = "foo";
var myObject = {
    // ES6新增加的computered property name写法，使用[]包含表达式
    [prefix + "bar"] : "hello",
    [prefix + "baz"] : "world"
};

console.log(myObject[prefix + "bar"]);
console.log(myObject[prefix + "baz"]);
console.log(myObject["foobar"]);
console.log(myObject["foobaz"]);
