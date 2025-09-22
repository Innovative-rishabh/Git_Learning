// const cart = ["pizza", "coke", "sandwich"];

// function placeOrder(cart) {
//   console.log("Talking with Dominos");

//   const pr = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const food_available = true;
//       if (food_available) {
//         console.log("Order Placed Successfully");
//         const order = { orderId: 20, restaurant: "Dominos", food: cart };
//         resolve(order);
//       } else {
//         reject("Items out of stock");
//       }
//     }, 2000);
//   });
//   return pr;
// }

// function prepareOrder(order) {
//   console.log("Pizza Preparation started");

//   const pr = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Pizza Preparation Done!");
//       const foodDetails = {
//         token: 12,
//         restaurant: order.restaurant,
//         location: "Motihari",
//       };
//       resolve(foodDetails);
//     }, 5000);
//   });
//   return pr;
// }

// function pickupOrder(foodDetails) {
//   console.log("Reaching restaurant to pick up the order");

//   const pr = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Order picked up by the delivery boy");
//       const dropLocation = foodDetails.location;
//       resolve(dropLocation);
//     }, 3000);
//   });
//   return pr; // yeh important hai
// }

// function deliveryOrder(dropLocation) {
//   console.log("Delivery boy is on the way");
//   setTimeout(() => {
//     console.log(`Order delivered successfully at ${dropLocation}`);
//   }, 5000);
// }

// placeOrder(cart)
//   .then((order) => prepareOrder(order))
//   .then((foodDetails) => pickupOrder(foodDetails))
//   .then((dropLocation) => deliveryOrder(dropLocation))
//   .catch((error) => console.log(error));


// async function greet(){  // await ka istemaal khule me nhi ho skta isko hmesa async function ke andar likhte hai
// const order= await placeOrder(cart);
// const foodDetails=await prepareOrder(order);
// const dropLocation= await pickupOrder(foodDetails);
// deliveryOrder(dropLocation);
// }

// greet();

// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello Everyone");
//     },5000)
// })

// // // console.log(pr); // promise pending ho jaaega
// // pr.then((response)=>console.log(response));

// //Isi problem ko async se solve krna ho tab
// async function greet() {

//     const data1= await pr;

//     console.log(data1);

//     const data2= await pr;

//     console.log(data2);

    
// }
// greet();


// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("First promise resolved");
//     },5000)
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Second promise resolved");
//     },5000)
// })
// async function greet() {

//     const data1= await p1;

//     console.log(data1);

//     const data2= await p2;

//     console.log(data2);

    
// }
// greet();

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("First promise resolved");
//     },5000)
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Second promise resolved");
//     },10000)
// })
// async function greet() {

//     const data1= await p1;

//     console.log(data1);

//     const data2= await p2;

//     console.log(data2);

    
// }
// greet();

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("First promise resolved");
//     },8000)
// })

// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Second promise resolved");
//     },10000)
// })
// async function greet() {

//     const data1= await p1;

//     console.log(data1);

//     const data2= await p2;

//     console.log(data2);

    
// }
// greet();

// function task1(){
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("First promise resolved");
//     },8000)
// })
// return p1;
// }

// function task2(){
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Second promise resolved");
//     },10000)
// })
// return p2;
// }
// async function greet() {

//     const data1= await task1();

//     console.log(data1);

//     const data2= await task2();

//     console.log(data2);

    
// }
// greet();

//async function hmesa promise return krta hai

// async function meet(){
//     return "Hello Rishabh";
// }

// meet().then(value=>console.log(value));

//Kuch return nhi kre async function tb undefined return hoga

// async function meet(){
 
// }

// meet().then(value=>console.log(value));

//Maut ka khel
// function task1(){
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("First promise resolved");
//     },8000)
// })
// return p1;
// }

// function task2(){
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Second promise resolved");
//     },10000)
// })
// return p2;
// }
// async function greet() {
//      console.log("Hello World");
//     const data1= await task1();

//     console.log(data1);

//     const data2= await task2();

//     console.log(data2);

    
// }
// greet();

// console.log("Hello Coder Army");
// console.log("I am Rishabh");

//ISKA OUTPUT
// Hello World
// Hello Coder Army
// I am Rishabh
// First promise resolved
// Second promise resolved


//Error handling

// const cart = ["pizza", "coke", "sandwich"];

// function placeOrder(cart) {
//   console.log("Talking with Dominos");

//   const pr = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const food_available = true;
//       if (food_available) {
//         console.log("Order Placed Successfully");
//         const order = { orderId: 20, restaurant: "Dominos", food: cart };
//         resolve(order);
//       } else {
//         reject("Items out of stock");
//       }
//     }, 2000);
//   });
//   return pr;
// }

// function prepareOrder(order) {
//   console.log("Pizza Preparation started");

//   const pr = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Pizza Preparation Done!");
//       const foodDetails = {
//         token: 12,
//         restaurant: order.restaurant,
//         location: "Motihari",
//       };
//       resolve(foodDetails);
//     }, 5000);
//   });
//   return pr;
// }

// function pickupOrder(foodDetails) {
//   console.log("Reaching restaurant to pick up the order");

//   const pr = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Order picked up by the delivery boy");
//       const dropLocation = foodDetails.location;
//       resolve(dropLocation);
//     }, 3000);
//   });
//   return pr; // yeh important hai
// }

// function deliveryOrder(dropLocation) {
//   console.log("Delivery boy is on the way");
//   setTimeout(() => {
//     console.log(`Order delivered successfully at ${dropLocation}`);
//   }, 5000);
// }


// async function greet(){  // await ka istemaal khule me nhi ho skta isko hmesa async function ke andar likhte hai
// try{
// const order= await placeOrder(cart);
// const foodDetails=await prepareOrder(order);
// const dropLocation= await pickupOrder(foodDetails);
// deliveryOrder(dropLocation);
//  }
// catch(error){
//     console.log(error);
// }
// }

// greet();


//PARALLALY EXECUTE KARANA HO AGAR 2 FUNCTION KO TB

// function task1(){
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("First promise resolved");
//     },8000)
// })
// return p1;
// }

// function task2(){
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Second promise resolved");
//     },10000)
// })
// return p2;
// }
// async function greet() {
//      console.log("Hello World");
//     const [data1,data2]= await Promise.all([task1(),task2()]);

//     console.log(data1);


//     console.log(data2);

    
// }
// greet();