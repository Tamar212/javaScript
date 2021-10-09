var s="aaa bcde";
console.log( s.charAt(0));

document.getElementById("btn").addEventListener("click",()=>{
    for(let i=0;i<5;i++){
         setTimeout(()=>{
            alert(i)
         } ,1000*i)
         console.log(i);
    }
})
function f1(){
    for(var i=0;i<5;i++){
        document.createElement("button");
    }
}
f1();

//1
function func1() {
    var b ;
    for(let i=0;i<5;i++){
        b=document.createElement("button");
        b.innerHTML = "CLICK ME";
        document.body.appendChild(b);
        b.addEventListener("click",()=>{alert(i)})
       // document.getElementsByName("b").addEventListener("click",()=>{ alert(i)})
       
    }
    
  }
  func1();

  //2
  function func2(x,y,z){
   if(x%10==y%10||x%10==z%10||y%10==z%10){
       return true;
   }
   return false;
  }

 console.log( func2(10,21,33));

 function func8(s,c){
    
     var n="";
    for(let i=0;i<8;i++){
        
         if(s.charAt(i)==" "){
            n+=c;
            console.log("y"+s.charAt(i))
         }
         else{
             console.log(s.charAt(i))
             n+=s.charAt(i);
        }
    }
    return n;
 }
 console.log(func8("aa cc gg",'+'));