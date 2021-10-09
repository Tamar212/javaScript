var x = 5;
if (x == "5")
    console.log(x)
console.log(3 + "2" + (5 + 7) + "-6")
var s = "45";
console.log(Number(s) + 6);
console.log(parseInt(s) + 6);
console.log(6 + +s);
var z = 5;
console.log("" + z + 4)
console.log(z1);
console.log(z1);
// console.log(r);
var z1 = 7;
//hoisting
//var המערכת מעלה לראש הדף את ההצהרות של המתשנים מסוג 
//ושל הפונקציות ולכן ניתן להשתמש במשתנה גםפ לפני ההגדרה שלו
let r;
console.log(r);

console.log(1 + -"1" + "2")//02
console.log("1" + "1" + "2")//112
console.log(1 + "2" + "2")//122
console.log(1 + +"2" + "2")//32
console.log("A" - "B" + "2")//-12
console.log("A" - "B" + 2)//1

//NaN כאשר אנו מנסים לעשות פעולחה חשבונית על ערך שלא יכול להיות מומר למספר הערך יהיה נוט א  נמבר
/*02
/* 112
/* 122
/* 32
/* NaN2
/* NaN

*/

for (var i = 0; i < 5; i++) {
    console.log(i)
    let c = 9;
}
// console.log(c)
function f() {
    var t = "llll";
}
f()
// console.log(t)//t is not defined

//var  מוכר בכל הפונקציה ואם הוא מוגדר מחוץ לפונקציה מוכר בכל הדף
//אפילו אטם נגדיר אותו בתוך פור או איפ הוא מוכר בכל הפונקציה
//let  מוכר רק בבלוק שבו הוא מוגדר
document.getElementById("btn").addEventListener("click", () => {
    for (let i = 0; i < 5; i++)
        setTimeout(() => {
            // let x=i
            alert(i)
        }, 1000 * i)
    console.log(i)//5
})

var a = "abc"
var b = 5;
var c = true;
var d = { name: "abbb" };
var e = [1, 2, 78, "ppp", true];
e[800] = 9;
console.log(typeof (a))
console.log(typeof (b))
console.log(typeof (c))
console.log(typeof (d))
console.log(typeof (e))
var f = typeof (e)
console.log(typeof (f))


//פונקציות בגאוה סקריפט
//function decleration
f1();
function f1() {
    console.log("f1")
}
//----------f2()//f2 is not a function
//function expression --ביטוי פונקציה
var f2 = function () {
    console.log("f2")
}
//hoistingכאלה פונקציות רק ההצהרה על המשתנה עלתה לראש הדף במנגנון ה
//ולא ההשמה של הפונקציה

f2();

var f3 = function myFunction(x) {
    console.log(x)
    if (x > 0)
        f3(x - 1);
    //myFunction(x - 1);//רק מתוף הפונקציה אפששר לזמן אותה שמה האנונימי

}
f3(5);
//-----------myFunction(5); myFunction is not defined
//אם הפונקציה לא מחזירה ערך  היא מחזירה Undefined
var res = f2();
console.log(res);

function f4(fname, lname) {
    return function (age) {
        console.log(fname + " " + lname + " " + age)
    }
}
var w = f4("rina", "levi");
w(15)
//ססקופ global
//מוכר בכל מקום
//ססקופ local
//מוכר רק בתוך הסקופ 


//פונקציה יכולה לגשת למשתנים המוגדרים בסקופים שעוטפים אותה

//closure
//כאשר פונקציה פנימית משתמשת במשתנים שמוגדריםפ בפונקציה החיצונית
//גם אחרי שהפונקציה החיצונית הסתיימה המשתנים הללו נשארים בזיכרון לצורך הפונקציה הפנימית

function sum(x, y) {
    //כאשר ךא נשלחו כל הפרמטרים לפונקציה הערך שלה הוא Undefined
    //כל פונקציה מקבלת את הפרמטרים שנשלחו אליה לתוך מערך האגיומנטס
    console.log(arguments[0])
    // if (arguments.length < 2)
    if (y === undefined)
        return x;
    return x + y;
}//ניתן לשלוח לפונקציה גם יותר פרמטרים ממה שמצפה לקבל
function f5() {
    function f6() {
        var xx = 78;
    }
    f6();
    // console.log(xx);//xx is not defined//
    //מתוך פונקציה חיצונית לא ניתן לגשת למשתנים המוגדרים בפנימית
    //אבל הפוך זה אפשרי
}
//-------f6();//לא ניתן לזמן את הפונקציה 
f5();
function fa(x) {
    function fb(y) {
        function fc(z) {
            console.log(x + " " + y + " " + z);
        }
        fc(3);
    }
    fb(9);

}
fa(8);
function f7(x) {
    return function (y) {
        return x * y;
    }
}
console.log(f7(5)(6))

var b = 1;
function outer() {
    var b = 2;
    function inner() {
        b++;
        console.log(b);//NaN
        var b = 3;

    }
    inner();

}
outer();
//פוקציה יכולה לקבל פונקציה אחרת כפרמטר

function myMap(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++)
        result[i] = func(arr[i]);
    return result;
}

function dup(x) {
    return x * x;
}

function pow3(x) {
    return x * x*3;
}
let arr1=[4,8,5];
console.log(myMap(arr1,dup))
console.log(myMap(arr1,pow3))
arr1.map(dup)