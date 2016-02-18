// 此例并没有体现出username，password，email这三个变量通过闭包访问的优势何在？
function User(){
    var username,password,email;
    var hello = "welcome!";

    function doLogin(user,pw) {
        username = user;
        password = pw;
        console.log(hello + user);
    }

    function doRegister(user,email,pw){
        username = user;
        password = pw;
        this.email = email;
        console.log(user + " registered with email:" + email);
        doLogin(user,pw);
    }

    return {
        login:doLogin,
        register:doRegister,
    };
}

var user = User();
user.register("lisi","lisi@126.com","123123");
console.log(user.username);
