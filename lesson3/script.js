'use strict'
//פקודה יכולה להופיע רק בשורה הראשונה או אחרי הערות
//או בשורה ראשונה של פונקציה
let x = document.querySelector("input[type='color']");
x.addEventListener("change", () => {
    console.log(x.value);

    sessionStorage.setItem("myColor", x.value);
    localStorage.kk = x.value;//שקול לשורה קודמת
});
//arrow function
//פונקצית חץ 2015 es6
function f(x) {
    return x + 5;

}
var t = (x) => { return x + 5; }
var t2 = x => x + 5;

function sum(x) {
    return function (y) {
        return x + y;
    }
}
var sum = x => y => x + y;

window.addEventListener("storage", (eventData) => {

    console.log(eventData);
    getFromStorege();

})
// let eval=5
// function f2(x,x){
//     return x;
// }
// var o={
//     name:"jjjj",
//     name:"jjjj"
// }
var s = "abcdef";
console.log(s.charCodeAt(2));//קוד אסקי של התו במקום האידקס
console.log(s.charAt(2));
s[2];
// s.split();

let a = [];
a[900] = 5;
console.log(a);
//יכגול להכיל כל סוגי הטיפוסים באות ומערך

a = [12, 45, 78];
let b = a;
b[1] = 2;
console.log(a)
// a.every((item)=>{return item%2==0});
a.every(check);

a.forEach(check)
function check(itemmmmmm, indddex, AZrrrr) {
    return itemmmmmm % 2 == 0
}
a.map((item, index) => {
    return {
        name: item,
        i: index
    }
})
//לבדוק מה עושות פוקנציות אלה

//a.reduce 
x = undefined;
console.log(typeof (x));//undefined
var t4 = null;
console.log(typeof (t4));//object

// if(x==NaN)//לא בודק האם הערך הוא נוט א נמבר
isNaN(x)

var obj = {
    name: "rina",
    age: 15,
    height: 150,
    weight: 50,
    print: function () {
        console.log(this.name)
    },
    calcBmi: function () {
        return this.height * this.height / this.weight;
    }
    , printAllFeilds:function(){
        for(x in this){
            if(typeof this[x])
        }
    }
}
