const GrandParent=document.getElementById('GrandParent');
const Parent=document.getElementById('Parent');
const Children=document.getElementById('Children');

//Event Bubbling and event capturing

// By default bubbling aur capturing me se bubbling hi chalta hai
// event listener me generally 3 arguments hote hai eg Children.addEventListener(first_event,callbackfunction, capture_option)

// agar capture option yaani 3rd option true= means Event Capturing
// agr capture option false=Event bubbling by default capture ki value false hoti hai

//Event Bubbling
// Children.addEventListener('click',()=>{
//     console.log("Children Clicked");

// })
// Parent.addEventListener('click',()=>{
//     console.log("Parent Clicked");

// })
// GrandParent.addEventListener('click',()=>{
//     console.log("GrandParent Clicked");

// })

//Event Capturing

// Children.addEventListener('click',()=>{
//     console.log("Children Clicked");

// },true)
// Parent.addEventListener('click',()=>{
//     console.log("Parent Clicked");

// },true)
// GrandParent.addEventListener('click',()=>{
//     console.log("GrandParent Clicked");

// },true)

// Guess the output

// Children.addEventListener('click',()=>{
//     console.log("Children Clicked");

// },true)
// Parent.addEventListener('click',()=>{
//     console.log("Parent Clicked");

// },false)
// GrandParent.addEventListener('click',()=>{
//     console.log("GrandParent Clicked");

// },true)

//output== 1.Granparent clicked 2.Children Clicked 3.Parent Clicked

//Guess the output

// Children.addEventListener('click',()=>{
//     console.log("Children Clicked");

// },false)
// Parent.addEventListener('click',()=>{
//     console.log("Parent Clicked");

// },true)
// GrandParent.addEventListener('click',()=>{
//     console.log("GrandParent Clicked");

// },false)

//Output==1.Parent 2.Children 3.GrandParent

//Guesss the output
// Children.addEventListener('click',()=>{
//     console.log("Children Clicked");

// },false)
// Parent.addEventListener('click',()=>{
//     console.log("Parent Clicked");

// },false)
// GrandParent.addEventListener('click',()=>{
//     console.log("GrandParent Clicked");

// },true)

//ootput==Granparent children parent

//guess the output

// Children.addEventListener('click',()=>{
//     console.log("Children Clicked");

// },true)
// Parent.addEventListener('click',()=>{
//     console.log("Parent Clicked");

// },true)
// GrandParent.addEventListener('click',()=>{
//     console.log("GrandParent Clicked");

// },false)

//Parent children grandparent

//guess the output
// Children.addEventListener('click',()=>{
//     console.log("Children Clicked");

// },false)
// Parent.addEventListener('click',()=>{
//     console.log("Parent Clicked");

// },false)
// GrandParent.addEventListener('click',()=>{
//     console.log("GrandParent Clicked");

// },true)



//grandparent children parent

// Children.addEventListener('click',(event)=>{
//     // console.log("Children Clicked");
//     console.log(event.target);

// },false)
// Parent.addEventListener('click',(event)=>{
//     // console.log("Parent Clicked");
//     console.log(event.target);

// },false)
// GrandParent.addEventListener('click',(event)=>{
//     // console.log("GrandParent Clicked");
//     console.log(event.target);

// },false)

//Output irrespective of what is true or  false it will print kaun se wale event ne us element ko target kiya hai occured how many times it will print depend on true or false



// Children.addEventListener('click',(event)=>{
//     // console.log("Children Clicked");
//     console.log(event.target);

// },true)
// Parent.addEventListener('click',(event)=>{
//     // console.log("Parent Clicked");
//     console.log(event.target);

// },true)
// GrandParent.addEventListener('click',(event)=>{
//     // console.log("GrandParent Clicked");
//     console.log(event.target);

// },true)

//Output irrespective of what is true or  false it will print kaun se wale event ne us element ko target kiya hai how many times it will print depend on true or false

// Children.addEventListener('click',(event)=>{
//     // console.log("Children Clicked");
//     console.log(event.type);

// },true)
// Parent.addEventListener('click',(event)=>{
//     // console.log("Parent Clicked");
//     console.log(event.type);

// },true)
// GrandParent.addEventListener('click',(event)=>{
//     // console.log("GrandParent Clicked");
//     console.log(event.type);

// },true)

//Output in accordance with event bubbling and event capturing it will print the event here click it may be mouseenter mouseover or anything like that

// Children.addEventListener('click',(event)=>{
//     // console.log("Children Clicked");
//     console.log(event.target);

// },true)
// Parent.addEventListener('click',(event)=>{
//     // console.log("Parent Clicked");
//     console.log(event.target);

// },true)
// GrandParent.addEventListener('click',(event)=>{
//     // console.log("GrandParent Clicked");
//     console.log(event.target);

// },true)

// current target

Children.addEventListener('click',(event)=>{
    // console.log("Children Clicked");
    // console.log(event.target);

},true)
Parent.addEventListener('click',(event)=>{
    // console.log("Parent Clicked");
    // console.log(event.currentTarget);

},true)
GrandParent.addEventListener('click',(event)=>{
    // console.log("GrandParent Clicked");
    console.log(event.currentTarget);
    // console.log(event.);

},true) 

//Now we will use this concept of event bubbling and capturing in our background changer project ek baar parent pr laga diya to baari baari se har ek children par event listener lagane ki zaroorat nhi hai

