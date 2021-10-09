var fruit1={
    name:"apple",
    calories:50,
    price:5,
    color:"red" 
};

var fruit2={
    name:"peach",
    calories:63,
   // price:10   
};

function Fruit(_name,_calories,_price){
  this.name=_name;
  this.calories=_calories;
  this.price=_price;
}

var fruit3=new Fruit("banana",100,7);

let fruits=[fruit1,fruit2,fruit3];

function print(fruits,x){
  console.log(fruits[x].name+" "+fruits[x].calories+" "+fruits[x].price+" "+hascolor(x));
  
}

function hascolor(x){
    if(fruits[x].color){
        return fruits[x].color;
    }
    return " " ;
}


 for(x in fruits){
     print(fruits,x);
 }
 
 for(x in fruits){
     if(hascolor(x)!=" "){
        print(fruits,x);
     }
}

function change() {
    //אפשר לגשת לשדות מתשנים
    var d= document.querySelector("input[type='text']").value;
    if(d<10||fruit1.price>10000){
        console.log("error,its not between 10 to 10000")
    }
    else{
    fruit1.price= document.querySelector("input[type='text']").value;
    console.log(fruit1.price);

    }
 

}


function delete1() {
    for(x in fruits){
        var c=document.querySelector("input[type='calory']").value;       
        if(fruits[x].calories>c){
            fruits[x]=null;
           

        } 
    }
    for(x=0;x<fruits.length-1;x++){
        if(fruits[x]==null){
            fruits[x]=new Fruit(fruits[x+1]);
        } 
    }
    for(x in fruits){
        print(fruits,x);
    }
}