//without the use of callback function 

// function fetchuser(){
//     console.log("Fetching the user detail....");
//     setTimeout(()=>{
//         console.log("Data fetched successfully");
//         const name="Rishabh"; // data fetched from backend successfully
//         greet(name);
//         meet(name);

//     },2000)
// }
// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function meet(name){
//     console.log(`Hello ${name}, I will meet you in Delhi`);
// }
// fetchuser()

// With the use of call back function


// function fetchuser(callback){
//     console.log("Fetching the user detail....");
//     setTimeout(()=>{
//         console.log("Data fetched successfully");
//         const name="Rishabh"; // data fetched from backend successfully
//        callback(name);

//     },2000)
// }
// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function meet(name){
//     console.log(`Hello ${name}, I will meet you in Delhi`);
// }
// fetchuser(greet);
// fetchuser(meet);

// function fetchuser(callback){
//     console.log("Fetching the user detail....");
//     setTimeout(()=>{
//                 console.log("Data fetched successfully");
//                 const obj={
//                     name:"Rishabh",
//                     age:20,
//                     city:"Motihari",
//                 }

//                greet(obj);
        
//             },2000)
//         }
//          function greet(obj){
//             console.log(`Hello ${obj.name}`);
//          }
//          function meet(obj){
//             console.log(`Hello ${obj.name},I will meet you in Delhi`);
//          }
//     //   fetchuser(greet);



// function fetchdata(callback){
//     console.log("Fetched Info of user is: ");

//     setTimeout(()=>{
//         console.log("User detail fetched successsfully");
//         const obj={
//             name:"Rishabh",
//             age:20,
//             city:"Motihari",
//         }
//      callback(obj);
//     },2000)

// }


// fetchdata(meet);


//UNDERSTANDING CALL BACK HELL

// placing the order of ppizza

function placeOrder(callback){
    console.log("Talking with Dominos");
    setTimeout(()=>{
        console.log("Order Placed Succsessfully");
        callback();
    },2000)
}

function prepareOrder(callback){
    console.log("Pizza Preparation started");
    setTimeout(()=>{
        console.log("Pizza Preparation Done!");
        callback();
    


    },5000)
}

function pickupOrder(callback){
    console.log("Reaching restaurant to pick up the order");
    setTimeout(()=>{
        console.log("Order picked up by the delivery boy");
      callback();
    },3000)
}

function deliveryOrder(){
    console.log("Delivery boy is on the way");
    setTimeout(()=>{
        console.log("Order delivered successfully");
    },5000)
}

placeOrder(()=>{
    prepareOrder(()=>{
        pickupOrder(()=>{
            deliveryOrder();  // call back hell (call back ke andar call back)
        });
    });
});
//Maut ka khel
// placeOrder();
// prepareOrder();

//output
// Pizza Preparation started
// Oreder Placed Succsessfully
// Pizza Preparation Done!




