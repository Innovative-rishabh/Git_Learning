// let obj={};
// console.log(obj);
// obj.name="Rohit";
// console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// let obj={};
// Object.defineProperty(obj,'name',{
//     value: 'Rohit',
//   writable: false,
//   enumerable: true,
//   configurable: true

// })
// console.log(obj);
// obj.name='Mohit';
// console.log(obj);
// const arr=[10,20,30,40];
// arr.name="Rishabh";
// arr.age=30;
// for(let key in arr){
//     console.log(key,arr[key]);
// }
// const arr=[10,20,30,40];
// for(let value of arr){
//     console.log(value);
// }
// let str="rishabh";
// for(let value of str){
//     console.log(value);

// }
// const obj={
//     name:"Rishabh",
//     age:20,
//     gender:"male",
// }
// // for(let key in obj){
// //     console.log(key);
// // }
// for(let value of obj){ //will give an error since obj is not iterable
//     console.log(value);
// }

// for(let value of Object.values(obj)){
//     console.log(value);
// }
 // Callback function

//  function name(fun){
//     console.log("Hello My name is Rishabh");
//     fun();
//  }
//  function greet(){
//     console.log("My name is Riya Kumari")
//  }
//  name(greet);

//  name( function greet(){
//     console.log("My name is Riya Kumari")
//  })


// for each
//  let arr=[10,20,30,40,50];
//  arr.forEach((number,index,arr)=>{
//     arr[index]=number*2;
//  })
//  console.log(arr);


// flter

// let arr=[10,20,21,22,23,25,30];
// const result=arr.filter((num)=> num%2==0 );


// console.log(result);

// const students =[
//     {name:"Rishabh",age:20,marks:100},
//     {name:"Rohan",age:20,marks:10},
//     {name:"Mohan",age:20,marks:20},
//     {name:"Rohit",age:20,marks:90},
//     {name:"Mohit",age:20,marks:95},
// ]
// const result=students.filter((obj)=>{
//     return obj.marks<50;
// });
// console.log(result);
// const result2=students.filter(({marks})=>{
//     return marks<50;
// });
// console.log(result2);
 //REDUCE
//  const arr=[10,20,30,40,50];
//  const result=arr.reduce((acc,curr)=>{
//     acc=acc+curr;
//     return acc;
//  });
//  console.log(result);

// let arr=["apple" , "orange", "banana" ,"grapes" ,"apple" , "orange", "banana" ,"grapes"];
// const result=arr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr))
//         acc[curr]++;
//     else
//     acc[curr]=1;

//     return acc;
// },{})
//  console.log(result);


//SET
// const set=new Set([10,20,30,40,40,50,50]);
// console.log(set);
// set.add(1);
// set.add(2);
// set.add("Rishabh");
// console.log(set);
// console.log(set.size);
// console.log(set.has("Rishabh"));
// set.clear();
// console.log(set);

// let arr=[10,20,30,40,50];
// const set=new Set(arr);
// console.log(set);
// let arr2=[...set];
// console.log(arr);
// console.log(arr2);

//union of 2 sets
// let set1=new Set([10,20,30,40]);
// let set2=new Set([10,20,50,60,70]);
// let set3=new Set([...set1,...set2]);
// console.log(set3);

//intersection of 2 sets 
// let set1=new Set([10,20,30,40]);
// let set2=new Set([10,20,50,60,70]);
// const result=[...set1].filter((num)=>set2.has(num));
// console.log(result);

//MAP
// const mymap=new Map();
// mymap.set(1,2);
// mymap.set("Rishabh","R.K");
// mymap.set(1,"Riya");
// mymap.set(20,"Mohan");
// console.log(mymap);

//how js code works

