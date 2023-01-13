document.writeln("<br>");
document.writeln("<br>");

let var1=23;
let var2=25;
let result=23==25; document.writeln(var1+"=="+var2+"="+result+"<br>");
result=23<25; document.writeln(var1+"<"+var2+"="+result+"<br>");
result=23>25; document.writeln(var1+">"+var2+"="+result+"<br>");
result=23!=25; document.writeln(var1+"!="+var2+"="+result+"<br>");
result=23<=25; document.writeln(var1+"<="+var2+"="+result+"<br>");
result=23>=25; document.writeln(var1+">="+var2+"="+result+"<br>");

document.writeln("<br>");

let condition1=true;
let condition2=false;
result=condition1&&condition2; document.writeln(condition1+"&&"+condition2+"="+result+"<br>");
result=condition1||condition2; document.writeln(condition1+"||"+condition2+"="+result+"<br>");

let loggedin=sessionStorage.getItem("loggedin");
if(loggedin==null) {
    document.getElementById("login").setAttribute("style","display:block;");
    document.getElementById("logout").setAttribute("style","display:none;");
} else {
    document.getElementById("login").setAttribute("style","display:none;");
    document.getElementById("logout").setAttribute("style","display:block;");
    document.getElementById("greeting").innerHTML="Welcome, <strong>"+loggedin+"!<strong><br>";
}
let login=()=>{
    let username=document.getElementById("username").value;
    let password=document.getElementsByName("password")[0].value;
    if(username==""||password=="") {
        alert("Please enter all required credentials to continue!");
        return;
    }
    const savedUname="user1234";
    const savedPword="pwrd1234";
    if(username==savedUname&&password==savedPword) {
        sessionStorage.setItem("loggedin", username);
        alert("Welcome, "+username+"! You are now logged in.");
        location.reload();
    } else {
        alert("Oh no, "+username+"! You failed to put in the right credentials.");
    }
}
let logout=()=>{
    let username=sessionStorage.getItem("loggedin");
    let confirmed=confirm("Hi, "+username+"! You are about to logout.");
    if(confirmed) {
        sessionStorage.removeItem("loggedin");
        location.reload();
    }
}

document.writeln("<br>");

let age=12;
if(age>=18) {
    document.writeln("You are eligible to vote!<br>");
} else {
    document.writeln("You are still a minor!<br>");
}