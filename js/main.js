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

let evaluateGrd=(grade)=> {
    if(grade=="") alert("You need to enter a number to evaluate");
    else if(isNaN(grade)) alert("That is not a number");
    else if(grade>100) alert("Oh, that is Beyond Expectations. No one gets that far.");
    else if(grade>=90 && grade <=100) alert("Outstanding");
    else if(grade>=85 && grade<=89) alert("Very Satisfactory");
    else if(grade>=80 && grade<=84) alert("Satisfactory");
    else if(grade>=75 && grade<=79) alert("Fairly Satisfactory");
    else if(grade>=0 && grade<75) alert("Did not meet expectations");
    else alert("Ooops! Did you intentionally enter a negative grade?");
}

document.writeln("<br>");

let calculate=()=>{
    let i = Number(document.getElementById("input1").value);
    let j = Number(document.getElementById("input2").value);
    let o = document.getElementById("operator").value;
    let r = 0; let text = "";
    /* if(o=="Addition") {
        r = i + j;
        text = i+" + "+j+" = "+r;
    } else if(o=="Subtraction") {
        r = i - j;
        text = i+" - "+j+" = "+r;
    } else if(o=="Multiplication") {
        r = i * j;
        text = i+" * "+j+" = "+r;
    } else if(o=="Division") {
        r = i / j;
        text = i+" / "+j+" = "+r;
    } */
    switch(o) {
        case "Addition":
            r = i + j;
            text = i+" + "+j+" = "+r;
            break;
        case "Subtraction":
            r = i - j;
            text = i+" - "+j+" = "+r;
            break;
        case "Multiplication":
            r = i * j;
            text = i+" * "+j+" = "+r;
            break;
        case "Division":
            r = i / j;
            text = i+" / "+j+" = "+r;
            break;
        default:
            //something that is not expected
    }
    document.getElementById("text").value = text;
}

let fruitSelector=()=>{
    let f = document.getElementById("fruitContainer").value;
    text = "";
    /* if (f=="Grapes") {
        text = "Wow, you selected "+f;
    } else if (f=="Orage") {
        text = "Wow, you selected "+f;
    } else if (f=="Apple") {
        text = "Wow, you selected "+f;
    } else if (f=="Strawberry") {
        text = "Wow, you selected "+f;
    } else {
        text = "You selected nothing";
    } */
    switch(f) {
        case "Grapes":
            text = "Wow, you selected "+f;
            break;
        case "Orage":
            text = "Wow, you selected "+f;
            break;
        case "Apple":
            text = "Wow, you selected "+f;
            break;
        case "Strawberry":
            text = "Wow, you selected "+f;
            break;
        default:
            //something that is not expected
    }
    document.getElementById("selectedFruit").innerHTML = text;
}