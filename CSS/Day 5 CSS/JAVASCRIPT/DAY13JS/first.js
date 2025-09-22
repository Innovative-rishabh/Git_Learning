// // for loop
// let sum=0;
//  for(let i=1;i<=10;i++){
//    sum+=i;
//  }
//  console.log(`Sum of 1st 10 natural numbers is: ${sum}`);

// why C++ is faster than JS?(answer w.r.t above for loop)

// since in JS har ek baar jb i change hoga on i++, it will acquire new space in memory instead of overwriting on the original value of i that was done in c++ same is the case with sum variable
// this is the reason why C++ is faster than JS
 
// Nested For loop
// print
// 12345
// 12345
// 12345
// 12345
// 12345

//  for (let i=1;i<=5;i++){
//     let str='';
//     for(let j=1;j<=5;j++){
//       str+=j+' ';
//     }
//     console.log(str);
//  }

// nested loops for matrix
// const matrix=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
//  for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[i].length;j++){
//         console.log(matrix[i][j]);
//     }
//  }

//vvi
//  let amount=10; // note ye dono let amount alag alg scope me hai isiliye allowed hai same scope let aur const wale same variable 1 hi hote hai
//   if(true){
//     let amount=20;
//     console.log(amount);
//   }
//   console.log(amount);

// greet();
// function greet(){
//     console.log("Hello Rishabh");
// }
// greet();



// const meet=function greet(){
//     console.log("Hello Rishabh");
// }
// meet();

// while loop
let i=1;
while(i<=10){
    console.log(i);
 i++;
}
