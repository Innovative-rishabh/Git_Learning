// globalobject: object
//Chrome Browser: window
// Nodejs: global
// Kisi bhi enviroment ke liye ek global ka use kr skte hai (globalThis) VVI
// aisa object jiske andar neeche likhe hue saare function likhe hue hai

// console.log("Hello World");
// console.log(Math.random());
//setInterval
//new Object 
//new String("Rishabh")

// let a=10;
// let b=20;
// console.log(this); // It points to modules exports object(means an empty object{})

//inside a function

// function greet(){
//     console.log(this);// gives global object e.g->window in browser
// }
// greet();


// "use strict"
// function greet(){
//     console.log(this);// gives undefined
// }
// greet();
// window.greet();

// //inside a method(Object Context)
// const obj={
//     name:"Rishu",
//     age:19,
//     meet:function(){
//         console.log(this.name);
//     }
// } 
// obj.meet();

//Arrow Function
// let obj={
//     name:"Rishu",
//     age:19,
//     greet:function(){
//         let ab=()=>{
//             console.log(this);
//         };
//         ab();
//     }
// }

//Inside a constructor or a class
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
}
let a=new Person("Rishabh",19);
console.log(a);