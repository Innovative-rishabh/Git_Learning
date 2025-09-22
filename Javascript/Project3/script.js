document.body.addEventListener('click',(event)=>{

    const circle=document.createElement('div');
    circle.className='circle';

    const cricketersShort = [
        "Kohli",
        "Rohit",
        "Dhoni",
        "Sachin",
        "Yuvi",
        "Hardik",
        "Jaddu",
        "Dhawan",
        "Rahul",
        "Pant",
        "Sky",
        "Gill",
        "Bumrah",
        "Shami",
        "Dravid",
        "Dada",
        "Kumble",
        "Kapil",
        "Sunny",
        "Zak",
        "ABD",
        "Gayle",
        "Warner",
        "Smith",
        "Cummins",
        "Starc",
        "Stokes",
        "Buttler",
        "Kane",
        "Guptill",
        "Taylor",
        "Baz",
        "Pollard",
        "Malinga",
        "Murali",
        "Sanga",
        "Mahela",
        "Kallis",
        "Shaheen",
        "Babar",
        "Wasim",
        "Waqar",
        "Afridi",
        "Inzy",
        "Lara",
        "Ponting",
        "McGrath",
        "Warne",
        "Gilly",
        "Hayden"
      ];
      

    circle.textContent=cricketersShort[(Math.floor(Math.random()*cricketersShort.length))];

    const y=event.clientY;
    const x=event.clientX;

    circle.style.left=`${x}px`;
    circle.style.top=`${y}px`;
    document.body.appendChild(circle);



    const colors = [
        "#FF6B6B", // soft red
        "#FFD93D", // golden yellow
        "#6BCB77", // mint green
        "#4D96FF", // bright blue
        "#FF7B54", // coral
        "#9D84B7", // lavender purple
        "#FFB4A2", // peach
        "#3DCCC7", // teal
        "#F38181", // pinkish red
        "#95E1D3", // aqua green
        "#FCE38A", // pastel yellow
        "#EAFFD0", // light mint
        "#8E44AD", // deep purple
        "#3498DB", // sky blue
        "#E67E22", // orange
        "#2ECC71", // emerald green
        "#E84393", // rose pink
        "#1ABC9C", // turquoise
        "#F39C12", // saffron
        "#D35400"  // burnt orange
      ];
      




    circle.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
   

let len = circle.textContent.length;
if (len > 15) {
  circle.style.fontSize = "8px";
} else if (len > 10) {
  circle.style.fontSize = "10px";
} else {
  circle.style.fontSize = "12px";
}
circle.textContent = cricketers[Math.floor(Math.random() * cricketers.length)];


    setTimeout(()=>{
        circle.remove();
    },5000)


})



  