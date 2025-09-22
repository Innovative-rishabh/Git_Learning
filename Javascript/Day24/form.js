const form=document.querySelector('form');


// form.addEventListener('click',(event)=>{
//     console.log(event.target.id);
// })

// form.addEventListener('input',(event)=>{
//     console.log(event.target.value);
// })


// form.addEventListener('change',(event)=>{
//     console.log(event.target.value);
// })


// form.addEventListener('focus',(event)=>{  // focus does not bubbles should be applied on individual children
//     console.log(event.target.value);
// })


// form.addEventListener('focusin',(event)=>{  // focusin does bubble
//     console.log(event.target.value);
// })



// form.addEventListener('blur',(event)=>{ // does not bubble should be applied on individual children
//     console.log(event.target.value);
// })

// form.addEventListener('focusout',(event)=>{ // does  bubble should be applied on individual children
//     console.log(event.target.value);
// })

// form.addEventListener('click',(event)=>{ // click event
//     console.log(event.target.value);
// })

// form.addEventListener('dblclick',(event)=>{ // double click event
//     console.log(event.target.value);
// })

// form.addEventListener('submit',(event)=>{ 
  
//     console.log("Form Submitted");
// })

// form.addEventListener('reset',(event)=>{ // must change the type of submit button in html first to reset
  
//     console.log("Form Reset");
// })



//IN SAB ka use case ky hai Project banao




// form.addEventListener('submit',(event)=>{

//     event.preventDefault();  // do not allows refreshing of page

//    const first= document.getElementById('username');
//    console.log(first.value);

//    const second= document.getElementById('lastname');
//    console.log(second.value);

//    const third= document.getElementById('age');
//    console.log(third.value);


//    const result=document.getElementById('result');
//    result.innerText=`${first.value} ${second.value} is a good boy `;
//    document.body.append(result); 
// })


//agar 100 input field ho to use form data object


form.addEventListener('submit',(event)=>{

    event.preventDefault();  // do not allows refreshing of page
  
    const data= new FormData(form);  //ye ek api form ke corrresponding saara data iske pass aa jaaega
    // console.log(data.keys()); // gives values in form of iterator and we know we can iterate over iterator by converting them into arrays or by using  for of loop
    //     //keys value (name value) pair ke form me store hoga
    //     console.log(Array.from(data.keys()));
    //     console.log(Array.from(data.values()));

    //  //using for of loop iteration over iterator
    //     for(let value of data.keys()){
    //         console.log(value);
    //     }

    //     for(let value of data.values()){
    //         console.log(value);
    //     }

    // console.log(data.entries());


    // for(let [key,value] of data.entries()){ // destructuring of array is used here
    //     console.log(key,value);
    // }



       



    

})


