// Get button elements
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const orange = document.getElementById('orange');
const purple = document.getElementById('purple');
const green = document.getElementById('green');

const buttons = [red, blue, orange, purple, green];

// Body
const body = document.querySelector('body');

// Click/song audios
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const fifth = document.getElementById('fifth');

const audios = [first, second, third, fourth, fifth];

// Hover sound effect
const hoverAudio = document.getElementById('hoverAudio');

const songNames = [
    "Rolex",
    "Aziz-Entry",
    "Premalu",
    "Marco",
    "Yung-Bgm"
];
const songNameDiv = document.getElementById('song-name');

// Unlock audio on first click (required for some browsers)
let audioUnlocked = false;
document.body.addEventListener('click', () => {
    audioUnlocked = true;
});

// Stop all main audios
function stopAllAudio() {
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Hover event for buttons
buttons.forEach((btn, index) => {
    btn.addEventListener('mouseenter', () => {
        // Do nothing if audio is locked
        if (!audioUnlocked) return;

        // Play short hover sound
        hoverAudio.currentTime = 0;
        hoverAudio.play();

        const color = getComputedStyle(btn).backgroundColor;
        body.style.backgroundColor = color;


        songNameDiv.textContent = songNames[index];

        // Play main song for this button
        stopAllAudio();
        audios[index].currentTime = 0;
        audios[index].play();
        audios[index].loop = true; // optional loop
    });
});

// Stop button element
const stopBtn = document.getElementById('stopBtn');

stopBtn.addEventListener('click', () => {
    stopAllAudio();                // stop all main audios
    body.style.backgroundColor = 'black'; // optional: reset background
});


const button=document.querySelectorAll('button');

 button.forEach((button) => {
   

    button.addEventListener('mouseenter',()=>{
        if(button.id=="stopBtn"){
            body.style.backgroundColor="black";
        }
        body.style.backgroundColor=button.id;

    }) 
    
 });
 
//  // is project me abhi optimization ki zarooorat  hai kyuki har ek  colour ke corresponding eventlistener hai aur evnet listener takes space in memory
//  // agar 100 ya 1000 colours ho gye to evenet listener bhi badh jaayenge jiski kaaran website ki searching speed ghat skti hai wagera wagera problems aa skte hai


//  //Use the concept of Event Bubbling and Event Capturing in order to reduce the memory usage 

//  const root=document.getElementById('root');

//  root.addEventListener('click',(event)=>{
//     if(event.target.tagName==='BUTTON'){
//     document.body.style.backgroundColor=event.target.id;}
//  })


//  //Maximum Bubbling is used so capturing is deafault false
 

 



