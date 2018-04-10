//Arrays
let fruits =["apple","orange","banana"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[5]);// undefined
console.log(fruits);

console.log(fruits.length);
fruits.push("watermelon");
console.log(fruits);

let fruit=fruits.pop();
console.log(fruits);
console.log(fruit);

fruits.shift();
console.log(fruits);

let numbers =[1,2,3,4];
numbers.splice(2,1)//splice(index, number of values)
console.log(numbers);

let numbers2 =[1,2,3,4];
numbers2.splice(0,2)//splice(index start, index end)
console.log(numbers2);

let numbers3 =[1,2,3,4];
numbers3.splice(0,2,44,55)//splice(index start, index end, numbers to add into array)
console.log(numbers3);
