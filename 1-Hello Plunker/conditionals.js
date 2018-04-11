if(1 <2){
  console.log("1 is lesser than 2");
}

if(2 == 2){
  console.log("2 is equal to 2")
}

if(2 === 2){
  console.log("2 is equal to 2")
}

if(2<=1){
  console.log("doesn't execute")
}

let favouriteFruit= "Orange"
let price =0;
 if(favouriteFruit == "Orange"){
   price=3;
 }
 
 console.log(price);
 
 if( favouriteFruit != "Apple"){
   console.log("fruit is not Apple");
 }
 else{
   console.log("fruit is apple");
 }
 
 //switch case
 
 let day="Mon";//try with  let day="Tue"; and  let day="Wed";
 switch (day){
   case("Mon"): console.log("day is Monday");
              break;
    case("Tue"): console.log("day is Tuesday");
              break;
    default: console.log("day is neither Monday or Tuesday")
              break;
 }
 
 //for loop
 for (let i =1; i <9;i++){
   console.log("the value of i is "+i);
 }
 
 //while loop
 let j =1;
 while(j<5){
   console.log("the value of j is "+j);
   j++;//increment the value
 } 
 
 
 
 
 
 
 
 
 
 
 