

// document.querySelector('button').addEventListener('click',()=>{
//    const place= document.getElementById('locationInput').value;

//    const promises=fetch(`https://api.weatherapi.com/v1/current.json?key=cf49c0bfca3e455f8a0153548251709&q=${place}&aqi=yes`);


// promises
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error));

// })
// const place= document.getElementById('locationInput').value;
// fetch(`http://api.weatherapi.com/v1/current.json?key=cf49c0bfca3e455f8a0153548251709&q=${place}&aqi=yes`)
// .then(response=>response.json())
// .then(data=>console.log(data.current.temp_c))
// .catch(error=>console.log(error));
// // function updateTemp(data){
//    const Element=document.getElementById('weatherResult');
//    Element.innerHTML=`Today's Temperature: ${data.current.temp_c} degree Celsius`;
// }

// document.querySelector('button').addEventListener('click', () => {
//     const place = document.getElementById('locationInput').value;
 
//     fetch(`https://api.weatherapi.com/v1/current.json?key=cf49c0bfca3e455f8a0153548251709&q=${place}&aqi=yes`)
//     .then(response => response.json())
//     .then(data => updateTemp(data))
//     .catch(error => {
//         document.getElementById('weatherResult').innerHTML = "Error fetching weather ❌";
//         console.error(error);
//     });
//  });
 
//  function updateTemp(data) {
//     const Element = document.getElementById('weatherResult');
//     Element.innerHTML = `Today's Temperature: ${data.current.temp_c}°C`;
//  }
    
document.querySelector('button').addEventListener('click',()=>{
    const place=document.getElementById('locationInput').value;
    function updateTemp(data){
        const element=document.getElementById('weatherResult');
        element.innerHTML=`${place}'s Temperature is: ${data.current.temp_c} degree Celsius`;
    }
    

    const promises= fetch(`https://api.weatherapi.com/v1/current.json?key=cf49c0bfca3e455f8a0153548251709&q=${place}&aqi=yes`)

promises
.then(response=>response.json())
.then(data=>updateTemp(data))
.catch(error=>console.log(error));
})







