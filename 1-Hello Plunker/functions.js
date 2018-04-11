//define a function
function displayText(){
  console.log("hellow world");
}

//call the function
displayText();


//function with parameter
function displayText2(text){
  console.log(text);
}

displayText2("Hello");

//function with multiple parameter
function displayText3(text, text2){
  console.log(text+ text2);
}

displayText3("Hello ","World 3");

//function with multiple parameter and to get return
function displayText4(text, text2){
  let result=text+ text2;
  return result;
}

console.log(displayText4("Hello ","World 4"));

//function with variable with global scope
let result="";
function displayText5(text, text2){
  result=text+ text2;
  return result;
}
displayText5("Hello ","World 4");
console.log("value of result variable is --> "+result);

