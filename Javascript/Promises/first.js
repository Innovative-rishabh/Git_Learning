

//Async task
//Weather
//API=Application programming interface
// const obj=fetch('http://api.weatherapi.com/v1/current.json?key=cf49c0bfca3e455f8a0153548251709&q=London&aqi=yes');
// Since fetch is an async task isko execute hone me time lagega hence it will return promise

//how to handle this thing
//use setTimeout 
// setTimeout(()=>{
//     console.log(obj);
// },2000)
//aapko kaise pata chalega ki 2 seconds me data hmesa fetch ho jaaega
//iska solution
// const Promises=fetch('http://api.weatherapi.com/v1/current.json?key=cf49c0bfca3e455f8a0153548251709&q=London&aqi=yes');
// Promises.then((response)=>{  //.then mtlb request poora ho jaaye tb print hoga console
//     console.log(response); 
// })
//In case of Error
// const Promises=fetch('http://api.weatherapi.com/v1/current.json?key=cf49c0bfca3e455f8a0153548251709&q=London&aqi=yes');
// Promises.then((response)=>{  //.then mtlb request poora ho jaaye tb print hoga console
//     console.log(response); 
// }).catch((error)=>{
//     console.log(error);
// })

//How to show the data

// const Promises=fetch('http://api.weatherapi.com/v1/current.json?key=cf49c0bfca3e455f8a0153548251709&q=London&aqi=yes');
// Promises.then((response)=>{
//     console.log(response); // it will give reponse ka header 
// })

// const Promises=fetch('http://api.weatherapi.com/v1/current.json?key=cf49c0bfca3e455f8a0153548251709&q=London&aqi=yes');
// Promises.then((response)=>{
//    const promise2=response.json();  //it will give reponse ka body
//    promise2.then((data)=>{
//     console.log(data);
//    })
// })


// const Promises=fetch('http://api.weatherapi.com/v1/current.json?key=cf49c0bfca3e455f8a0153548251709&q=London&aqi=yes');
// const Promises2=Promises.then((response)=>{


//     return response.json();
// })
// Promises2.then((data)=>{
//     console.log(data);
// })
// const Promises=fetch('http://api.weatherapi.com/v1/current.json?key=cf49c0bfca3e455f8a0153548251709&q=London&aqi=yes');
// Promises.then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })

//same can be written as
// Promises
// .then(response=>response.json())
// .then(data=>console.log(data))

//same can be written as
fetch('http://api.weatherapi.com/v1/current.json?key=cf49c0bfca3e455f8a0153548251709&q=London&aqi=yes')
.then(response=>response.json())
.then(data=>console.log(data.current.temp_f)) // temperature ko print karega faherienheit me
.catch(error=>console.log(error));


// is data se mai kh=uch bhi display kara sakta hu