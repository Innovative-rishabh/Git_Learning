//for of loop: It is used to iterate over iterable objects such as arrays, strings, or other iterable objects
// Iterating over array
// const arr=[10,12,14,16,18,20];
// for(let value of arr){
//     console.log(value);

// }
// Iterating over String
// let str="Rishabh";
// for(let value of str){
//     console.log(value);
// }

// It can not be used directly on plain objects means key : value pairs
// const obj={
//     name:"Rishabh",
//     age:19,
//     city:"Motihari"

// }
// for(let key of obj){
//     console.log(key); // it will throw an error that obj is not iterable
// }
 // then how will we iterate over them

const obj={
   name:"Rishabh",
    age:19,
    city:"Motihari"

 }
 for(let value of Object.keys(obj)){
 console.log(value,obj[value]);
 }