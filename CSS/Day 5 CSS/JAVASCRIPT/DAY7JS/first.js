// stack ke andar memory allocation of number
// let num1=231;
// console.log(num1);
// console.log(typeof num1);


// // heap ke andar memory allocation of number
// let num2=new Number(231);
// console.log(num2);

// console.log(typeof num2);

// let num1=231;
// let num2=new Number(231);
// let num3=new Number(231);

// console.log(num1==num2); //true since num2 being an object geta converted into number and hence 231==231 gives true.
// console.log(num2==num3); //false since num2 and num3 being an object they store reference or adressses now although their value being equal their addresses are different.

// let num = 231.64;
// console. log (num. toFixed (1)); // points ke baad kitne digits
// console. log (num. toPrecision(3)); // total kitne digits 
// console. log (num. toExponential (3)); // points ke baad kitne digits chahiye aur baaki ko exponential form
// console.log(typeof num.toString());
// console.log(num.valueOf());

// console. log (Math. E)
//  console. log (Math. LN10) ;
//  console. log (Math. PI);
//  console. log (Math. LOG10E) ;


// console.log(Math.random()); // this random number always gone a lie between 0 and 1 (VVI)
// console.log(Math.random()*10); //this random number always gone a lie between 0 and 1 (VVI) and after multiplication with 10 it will  give a random number between 0 to 
  
// floor and ceil
// let num1 = 23.1;
// console. log (Math. floor (num1)) ;
// console. log (Math. ceil (num1)) ;


// console. log (Math. floor (Math. random ()*10)); // it will generate numbers between 0 to 9
// console. log (Math. floor (Math. random ()*10)+1);// for including 10 we have added 1 here

// min = 30 , max =40;
// console. log (Math. floor (Math. random () *(max-min+1)+min));

// 30-40 ka numbers print krna ho tb
console. log (Math. floor (Math. random ()*(40-30+1)+30)); 

// Note we can't use Math.random() to produce OTP salthough it produces random results everytime but its output can be predicter by a hacker if he/she gets the access to the system 