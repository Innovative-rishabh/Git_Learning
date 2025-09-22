



// const original_answer=["Sachin Tendulkar","West Indies","Kapil Dev","Sachin Tendulkar","Australia"];
//In case agar koi quiz me 5 me se kinhi 3 questions ko attempt kr raha tb hi usko 0 milega since dono array ka size is different isiliye zero hence make original_answer array as object
// const original_answer={
//     q1:"Sachin Tendulkar",
//     q2:"West Indies",
//     q3:"Kapil Dev",
//     q4:"Sachin Tendulkar",
//     q5:"Australia"}



// const form=document.querySelector('form');
// form.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     const data=new FormData(form);
//     const ans=Array.from(data.values());
//     console.log(ans);

//     let result=0;
//     // for(let i=0;i<ans.length;i++){
//     //     if(ans[i]===original_answer[i]){
//     //         result++;
//     //     }
//     // }

//     // console.log(result);

//     for(let [key,value] of data.entries()){
//         if(value===original_answer[key]){
//             result++;
//         }
//     }
//     console.log(result);

//     const out=document.getElementById('out');
//     out.innerText=`${result} out of 5 is correct`;

//     document.querySelector('.quiz-container').append(out);
// })


// 20-question Cricket Quiz Bank
const questionBank = [
    {
      question: "Who is known as the 'God of Cricket'?",
      options: ["Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Ricky Ponting"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "Which country won the first Cricket World Cup in 1975?",
      options: ["West Indies", "Australia", "India", "England"],
      answer: "West Indies"
    },
    {
      question: "Who was the captain of India when they won the 1983 World Cup?",
      options: ["Kapil Dev", "Sunil Gavaskar", "Ravi Shastri", "Mohinder Amarnath"],
      answer: "Kapil Dev"
    },
    {
      question: "Which cricketer has the most runs in international cricket?",
      options: ["Sachin Tendulkar", "Kumar Sangakkara", "Ricky Ponting", "Jacques Kallis"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "Which country is called the 'Baggy Greens'?",
      options: ["Australia", "New Zealand", "South Africa", "England"],
      answer: "Australia"
    },
    {
      question: "Who won the ICC Cricket World Cup 2011?",
      options: ["India", "Sri Lanka", "Australia", "Pakistan"],
      answer: "India"
    },
    {
      question: "Which player is known as 'Captain Cool'?",
      options: ["MS Dhoni", "Virat Kohli", "Ricky Ponting", "AB de Villiers"],
      answer: "MS Dhoni"
    },
    {
      question: "Which country has won the most Cricket World Cups?",
      options: ["Australia", "India", "West Indies", "England"],
      answer: "Australia"
    },
    {
      question: "Who is the fastest century scorer in ODI cricket?",
      options: ["AB de Villiers", "Corey Anderson", "Shahid Afridi", "Brian Lara"],
      answer: "AB de Villiers"
    },
    {
      question: "Which bowler has the most wickets in Test cricket?",
      options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "James Anderson"],
      answer: "Muttiah Muralitharan"
    },
    {
      question: "Which player scored the first double century in ODI cricket?",
      options: ["Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma", "Chris Gayle"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "Who is the first cricketer to hit 10,000 runs in ODI cricket?",
      options: ["Sachin Tendulkar", "Ricky Ponting", "Brian Lara", "Jacques Kallis"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "Which team is nicknamed 'Men in Blue'?",
      options: ["India", "Australia", "England", "South Africa"],
      answer: "India"
    },
    {
      question: "Who holds the record for the most wickets in ODI cricket?",
      options: ["Muttiah Muralitharan", "Wasim Akram", "Glenn McGrath", "Chaminda Vaas"],
      answer: "Muttiah Muralitharan"
    },
    {
      question: "Which cricketer is known as 'The Wall'?",
      options: ["Rahul Dravid", "Sachin Tendulkar", "VVS Laxman", "Steve Waugh"],
      answer: "Rahul Dravid"
    },
    {
      question: "Who scored the fastest 50 in T20 internationals?",
      options: ["Yuvraj Singh", "Chris Gayle", "Kieron Pollard", "David Miller"],
      answer: "Yuvraj Singh"
    },
    {
      question: "Which country won the ICC T20 World Cup 2007?",
      options: ["India", "Pakistan", "Australia", "South Africa"],
      answer: "India"
    },
    {
      question: "Which cricketer has the highest individual score in ODI cricket?",
      options: ["Rohit Sharma", "Martin Guptill", "Chris Gayle", "Sachin Tendulkar"],
      answer: "Rohit Sharma"
    },
    {
      question: "Who is the first bowler to take 500 wickets in Test cricket?",
      options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "Glenn McGrath"],
      answer: "Anil Kumble"
    },
    {
      question: "Which cricketer has hit the most sixes in international cricket?",
      options: ["Chris Gayle", "Shahid Afridi", "MS Dhoni", "Rohit Sharma"],
      answer: "Chris Gayle"
    }
  ];
  
  // Pick 5 random questions
  function getRandomQuestions(num) {
    let shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  
  const selectedQuestions = getRandomQuestions(5);
  
  // Render questions
  const form = document.getElementById("quizForm");
  form.innerHTML = ""; // clear old static content
  
  selectedQuestions.forEach((q, index) => {
    const fieldset = document.createElement("fieldset");
  
    const legend = document.createElement("legend");
    legend.textContent = `${index + 1}. ${q.question}`;
    fieldset.appendChild(legend);
  
    q.options.forEach(opt => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index + 1}`;
      input.value = opt;
      label.appendChild(input);
      label.append(opt);
      fieldset.appendChild(label);
    });
  
    form.appendChild(fieldset);
  });
  
  // Submit button
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Submit";
  form.appendChild(button);
  
  // Submission logic
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    let result = 0;
  
    selectedQuestions.forEach((q, i) => {
      if (data.get(`q${i+1}`) === q.answer) {
        result++;
      }
    });
  
    const out = document.getElementById("out");
    out.innerText = `${result} out of 5 is correct`;
  });
  
