// use https://developer.mozilla.org/en-US/docs/Web/JavaScript for reference
//create an object

let user ={
  userId:"JohnDoe",
  firstName:"John",
  lastName:"Doe",
  age:45,
  isStatusActive:true
}

console.log("userId-->"+user.userId);
console.log("firstName-->"+user.firstName);
console.log("lastName-->"+user.lastName);
console.log("age-->"+user.age);
console.log("isStatusActive-->"+user.isStatusActive);

function switchUser(user){
  user.userId = "testUser";
  user.firstName= "firstName";
  user.lastName="lastName";
  user.age = 0;
  user.isStatusActive=false;
}

//switch the user by calling the function
switchUser(user);
console.log("userId after switching-->"+user.userId);
console.log("firstName after switching-->"+user.firstName);
console.log("lastName after switching-->"+user.lastName);
console.log("age after switching-->"+user.age);
console.log("isStatusActive after switching-->"+user.isStatusActive);

//Array of objects
let cities = [
  
  {
    city:"Chennai",
    country:"India"
  },
  {
    city:"London",
    country:"England"
  }
  
  ];
  
  console.log("city within first Object-->"+cities[0].city);
  console.log("country within first Object-->"+cities[0].country);
    console.log("city within first Object-->"+cities[1].city);
  console.log("country within first Object-->"+cities[1].country);
  
  //try this   console.log("country within first Object-->"+cities[2].country);


//standard objects

let randomValue=Math.random();
console.log(randomValue); 

randomValue=Math.trunc(randomValue*50);
console.log(randomValue); 


//Date

let date = new Date().toDateString();
console.log(date);

//String

let name ="John Doe";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

//check for NaN(not a number)

let number= 0/0;
console.log(Number.isNaN(number));

number= 100;
console.log(Number.isNaN(number));

