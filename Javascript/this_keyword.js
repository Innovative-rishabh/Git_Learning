// const obj={
//     name:"Rishabh",
//     age:20,
//       greet(){
//         console.log(this);
//     }

// }
// obj.greet();

// let obj={
//     name:"Rishabh",
//     age:20, 
//     greet:()=>{
//         console.log(this);
//     }
// }
// obj.greet();


//  let obj={
//     name:"Rishabh",
//     age:20,
//     greet:function(){
//         let ab=()=>{
//             console.log(this);
//         }
//         ab();
//     }
   


//  }
//  obj.greet();

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
let a =new person("Rishabh",20);
console.log(a);

