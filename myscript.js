console.log("hello")

 document.getElementById("d1").innerHTML="to you!!!";   
 //dom - document object model
var kk= document.getElementsByClassName("kk");
kk=document.querySelector("input[type='text']");
kk=document.querySelectorAll("input[type='text']");

var a=document.getElementsByClassName("good");
var b= document.querySelectorAll(".good");

var c=document.createElement("div");
c.innerText="reeeeeeee";

// c.setAttribute("class","good";)
c.classList.add("good");
document.body.appendChild(c);



// document.getElementById("d1").innerHTML+="<b>class 6</b>"//מוסיף כתגית
document.getElementById("d1").innerText+="<b>class 6</b>"//מתייחס כטקסט ולא יודע לפרש כתגית


