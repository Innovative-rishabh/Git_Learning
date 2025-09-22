// let arr=[2,3,4,1.8,9,"Rishabh",true];
// console.log(arr);
// console. log (arr. length) ;
// console. log (arr [5]); 
// console. log (arr.at (0));
// console. log (arr.at (-1));

// const arr=[1,2,3];
// const newarr=arr; // here reference of arr is getting copied to newarr
// console.log(arr==newarr);

// now i want  newarr to point at different address
// const arr=[1,2,3];
// const newarr=structuredClone(arr); 
// console.log(arr==newarr);

//push : add an element to the last
// const arr=[1,2,3,4];
// console.log(arr);
// arr.push(5);
// console.log(arr);
// arr.push(6);
// console.log(arr);

//pop : remove an element to the last
// const arr=[1,2,3,4];
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);

// unshift: adds an element to the beginning of array
// const arr=[1,2,3,4];
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// arr.unshift(-1);
// console.log(arr);

//shift :Removes the first element
// const arr=[1,2,3,4];
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.shift();
// console.log(arr);

// delete : delete element of a particular place(there is a disadvantage of using delete is that  it deletes the element the element but space is reserved for that element even after deletion of that element from array   )
// const arr=[1,2,3,4,5];
// delete arr[0];
// console.log(arr);
// console.log(arr[0]);

//indexOf : returns the index of first occurance of  the paricular element
// const arr=[0,1,2,3,4,5,6,7,8,9,8,10];
// console.log(arr.indexOf(8));

//lastIndexOf : returns the index of last occurance of  the paricular element
// const arr=[0,1,2,3,4,5,6,7,8,9,8,10];
// console.log(arr.lastIndexOf(8));

// includes : check if the given element exists in array or not
// const arr=[0,1,2,3,4,5,6,7,8,9,8,10];
// console.log(arr.includes(10));

// slice :extracts a portion of array without modifying the original array
// const arr=[2,4,6,8,10,12,14];
// console.log(arr);
// console.log(arr.slice(2,5));
// console.log(arr);

// splice :extracts a portion of array , modifying the original array
 const arr=[2,4,6,8,10,12,14,16];
console.log(arr);
console.log(arr.splice(2,5,"Rishabh","Raushan","Aman"));
console.log(arr);

// toString
// const arr=[2,4,6,8,10,12,14,16];
// console.log(arr);
// console.log(typeof arr);
// console.log(arr.toString());
// console.log(typeof arr.toString());

//join
// const arr=[2,4,6,8,10,12,14];
// console.log(arr);
// console.log(arr.join(" * "));
// console.log(arr.join(" "));c

//concat
// let arr1=[1,2,3,4,5];
// let arr2=[6,7];
// let arr3=arr1.concat(arr2);
// console.log(arr3);
// let arr4=[8,9,10];
// let arr5=arr1.concat(arr2,arr4);
// console.log(arr5);


// arr1.push(arr2); // after pushing another array in array 1 it will behave like 2d array
// console.log(arr1);
// console.log(arr1[6]);


//2d array

    // let arr2d = [ [1, 2,3], [4,5,6], [7,8,9] ];
    // console.log(arr2d [1] [0]);
    // console.log(arr2d);
    //  let newarr=arr.flat();
    //  console.log(newarr);
    //3d array
    // let arr3d=[ [1,2,[4,5]],[6,7,8] ];
    // console.log(arr3d[0][2][1]);
    // console.log(arr3d);
    // let newarr=arr3d.flat();
    // console.log(newarr);
    // let newArr=arr3d.flat(2);
    // console.log(newArr);


    // //check if array is not
    // let abc=[1,2,3];
    // console.log(typeof abc);
    // console.log(Array.isArray(abc));








