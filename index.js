// console.log("Hello!");

// let, var, const

// let a = "I love You";
// let b=Number(a)

// if (isNaN(b)) {
//   console.log("Ok");
// } else {
//   console.log("Not Ok");
// }

// Truthy Values: true, numbers except 0, non-empty strings, objects, arrays
// Falsy Values: false, 0, "", null, undefined, NaN.

// BODMOS

// Function Declarations

// const printName = (name, age, func) => {
//   console.log("The Name Is:", name);
//   console.log("Age Is:", age);
//   func();
// };

// printName("Tharick", 22, () => {
//   console.log("Small inner func");
// });

// [], {}

// Array

// let arr1 = [
//   3,
//   34,
//   32,
//   34,
//   324,
//   5,
//   342,
//   5,
//   32,
//   3,
//   32,
//   3,
//   324,
//   3,
//   "hgdufgu",
//   true,
//   () => {
//     console.log("Hi");
//   },
// ];

// arr1[arr1.length - 1]();

// Objects

// {key:value,.....}

// let person1 = {
//   name: "Tharick",
//   age: 22,
//   isMarried: true,
//   spouse: "Thamanna",
//   favFoods: ["Grill", "Biriyani", { mostFav: "Curd rice", leastFav: "Upma" }],
//   printHello: () => {
//     console.log("Hello Guys!");
//   },
// };

// console.log(person1.age);

// . method
// ["key"]

// obj.result.posts[0].userId.email

// parsing

// Array Methods

// push
// pop
// unshift
// shift
// sort
// splice

// arr.splice(6, 1, 7.1, 7.2);

// console.log(arr);

// slice
// map
// filter
// reduce

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let ans = arr.map((ele, ind) => {
//   return ind + ele;
// });

// console.log(ans);

// let nameList = [
//   { age: 22, canVote: false },
//   { age: 2, canVote: false },
//   { age: 12, canVote: false },
//   { age: 32, canVote: false },
//   { age: 42, canVote: false },
//   { age: 21, canVote: false },
//   { age: 18, canVote: false },
//   { age: 17, canVote: false },
//   { age: 25, canVote: false },
//   { age: 70, canVote: false },
//   { age: 1, canVote: false },
// ];

//above 20

// [{}, {}, {}];

// let correctedNameList = nameList.map((ele, ind) => {
//   if (ele.age >= 18) {
//     return { age: ele.age, canVote: true };
//   }
//   return ele;
// });

// console.log(correctedNameList);

// Filter

// let arr = [1, 2, 3, 4, 5, 6, 5, 7, 89, 3];

// []

// 1-->(1,0)

// let ans = arr.filter((ele, ind) => {
//   return ind;
// });

// console.log(ans);

// Reduce
// number

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // accumulator

//55

// Round 1-(0,1,0)==> 1
// Round 2-(1,2,1)==> 3
// Round
// Round
// Round
// Round
// Round
// Round
// Round
// Round 10-(45,10,9)==>55

// let ans = arr1.reduce((acc, ele, ind) => {
//   return acc / ele;
// }, 0);

// console.log(ans);

// Spread(...)

// let arr=[324,34,324,54,3,4,34]

// let arr1=[1,2,3,...arr]

// console.log(arr1);

// let obj = {
//   name: "Tharick",
//   age: 22,
//   isMarried: true,
//   spouse: "Thamanna",
//   favFoods: ["Grill", "Biriyani", { mostFav: "Curd rice", leastFav: "Upma" }],
//   printHello: () => {
//     console.log("Hello Guys!");
//   },
// };

// let obj1 = {
//   id: 1,
//   ...obj.favFoods[2],
// };

// console.log(obj1);

// Destructuring

// let obj = {
//   name: "Tharick",
//   age: 22,
//   isMarried: true,
//   spouse: "Thamanna",
//   favFoods: ["Grill", "Biriyani", { mostFav: "Curd rice", leastFav: "Upma" }],
//   printHello: () => {
//     console.log("Hello Guys!");
//   },
// };

// const { name, age, spouse, favFoods} = obj;

// console.log(age);
// console.log(name);
// console.log(favFoods);

// const { spouse, favFoods, printHello, ...gokul } = obj;

// console.log(gokul);
