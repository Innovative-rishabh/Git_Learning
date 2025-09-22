// Reduce
// const arr=[10,20,30,40,50];
// const result=arr.reduce((acc,curr)=>{
//     acc=acc+curr;
//     return acc;

// },0)
// console.log(result);
//
// let arr=["orange","apple","banana","orange","apple","banana","orange","grapes"];
// const result=arr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr))
//         acc[curr]++;
//     else
//     acc[curr]=1;
// return acc;
// },{})
// console.log(result);

//Sets
// const set=new Set([10,20,30,40,50,60,20,30,40]);
// console.log(set);

//Add
// const set1=new Set();
// set1.add(4);
// set1.add(6);
// set1.add("Rishu");
// set1.add("Kajal");
// console.log(set1);

// //Delete
// set1.delete(6);
// console.log(set1);

// convert array into set and vice versa
// let arr=[10,20,30,40,50,10,20,30,40];
// const set=new Set(arr);
// arr=[...set]
// console.log(set);
// console.log(arr);

//Union of two sets
//  let set1=[1,2,3,2,3,4,5,6];
//  let set2=[7,8,9,10,7,8,9];
//   let set3= new Set([...set1,...set2]);
//   console.log(set3);

//   Intersection of two sets
  let set1=new Set([1,2,3,2,3,4,5,6]);
 let set2=new Set([7,8,9,10,7,8,9,1,2]);
 const result = new Set([...set1].filter ((num) =>set2.has(num) ));
console. log (result);



