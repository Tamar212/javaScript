//3 דרכים  ליצרית אאמנטיםפ בגאוה סקריפט

var a1 = {};
//1. literal
var a = {
    firstName: "rina",
    lastName: "cohen",
    age: 15,
    "first name": "ppp",
    getFullName: function () { return this.firstName + " " + this.lastName; }
};

//גישה לשדות של אובייקט
console.log(a.firstName);
console.log(a.getFullName());
console.log(a["firstName"]);
a["first name"]
a["address"] = "rashi 5"; //אם השדה לא קיים הוא נוצר באופן מייד
//האובייקטים בגאוה סקריפט הם דינאמיים


//2. בנאי של אוביגקט

var b = new Object();// נוצר אובייקט ריק
b.lastName = "asdasdas";

//3. יצירת פונקצית בנאי
//constructor function
//כדי לרמז שתפקיד הפונקציה להיות בנאי
//נציין את שמה באות ראשונה גדולה
function Person(_name, age, _family) {
    this.name = _name;
    this.age = age;
    this.lastName = _family;
    this.getFullName = function () {
        console.log(this.name + " " + this.lastName);
    }
}

var p1 = new Person("rina", 12);//הקריעאה לפונקתציה בעזרת המילה ניו הופכת אותה להיות פונקציה מיוחדת
var p2 = new Person("mina", 78);//הקריעאה לפונקתציה בעזרת המילה ניו הופכת אותה להיות פונקציה מיוחדת


p1.address = "azayt 9";
console.log(p1);
console.log(p2);

p2.getFullName = function () { console.log("changed") }
p1.getFullName();
p2.getFullName();
function printFeild() {
    //אפשר לגשת לשדות מתשנים
    let field = document.querySelector("input[type='text']").value;
    console.log(p2[field]);

}


//2 צורות למעבר על שדות האובייטק
for (x in p2)
    console.log(x + " " + p2[x]);

let arr = Object.keys(p2);//מחזיר מערך מחרוזות של שמות כל המפתחות של האובייקט
for (let i = 0; i < arr.length; i++)
    console.log(arr[i] + " " + p2[arr[i]]);

delete p1.address;
console.log(p1.address);
var p3 = {};
Object.assign(p3, p1, p2, { height: 150 });
console.log("*************");
console.log(p3)//מעתיק את כלח השדות והערכים לתוך הפרמטר הראשון
//לוקח את השדות מכל האובייקטים מהשני והלאה
//אם ישנה כפילות בשדות
//יקח את הערך מהאובייקט האחרון ברשימה



function aa() {
    return {
        age: 45

    }
}

function bb() {
    return
    {
        age: 45

    }
}

console.log(aa());//{age:45}
console.log(bb());//undefined -- כי הוסיף אוטומטית נקודה ופסיק

var obj = {
    height: 150,
    weight: 50,
    name: {
        first: "chana",
        last: "levi"
    }
}
obj.name.last
obj["name"]["first"];

let arr1 = [1, 4, 5, 8, 9];
let arr2 = [];
arr1.forEach(element => {
    arr2.push(element);
});

let arr3 = [].concat(arr1);
let arr4 = arr1.slice();
//es6 spread operator
let arr5 = [7897, ...arr1, 78, 90, ...arr2];
let obj2 = { ...obj, age: 89 };//פורש את כל השדות שיש באובייט הנתון ומוסיף עוד שדות


let company = "volvo";
let price = 50000;

let myCar = { company: company, price: price };
let myCar2 = { company, price };

//destructing--פרוק
var company = myCar.company;
var price = myCar.price;
var { company, price } = myCar;


