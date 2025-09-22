// Advance loops
// for in loop

// let obj={
//     name:"Rishabh",
//     age:23,
//     gender:"Male",
//     city:"Kotdwar",


// }
//  for(let key in obj){
//     console.log(key);
    
//  }
//  console. log (Object. keys (obj )); // Array return karega keys ka
 
//  for(let key in obj){
//     console.log(key, obj[key]);
    
//  }

// for in loop me array ka istemaal kyu nhi krte
 
// const arr=[10,20,30,40];
// arr.name="Rishabh";
// arr.age=20;
// for(let key in arr){
//     console.log(key);
// }

const customer={
    name:"Rishu",
    age:19,

}
for(let key in customer){
    console.log(key);
}
Object. defineProperty (Object.prototype, 'toString',{
    enumerable: true,
    })

for(let key in customer){
    console.log(key);
}



