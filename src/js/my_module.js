var myModules = (function Manager(){
    var modules = {}; // |\longremark{存储模块的对象,name=>module}|

    function define(name,deps,impl) {
        for(var i = 0; i < deps.length; i++){
            deps[i] = modules[deps[i]]; // |\longremark{收集模块所声明的依赖模块}|
        }
        modules[name] = impl.apply(this,deps); // |\longremark{使用声明的依赖模块创建模块，因此impl可以成为模块的构造方法}|
    }

    function get(name) {
        return modules[name];
    }

    return {
        define:define,
        get:get
    };
})();

myModules.define("bar",[],function(){
    function hello(who) {
        return "Let me introduce: " + who;
    }

    return {
        hello:hello
    };
});

myModules.define("foo",["bar"],function(bar){ // |\longremark{注意这里的bar是依赖模块，因此作为参数参与了构建foo模块}|
    var hungry = "hippo";
    function awesome(){
        console.log(bar.hello(hungry).toUpperCase());
    }

    return {
        awesome:awesome
    }
});

var bar = myModules.get("bar");
var foo = myModules.get("foo");

console.log(bar.hello("hippo"));

foo.awesome();

// |\showremarks|
