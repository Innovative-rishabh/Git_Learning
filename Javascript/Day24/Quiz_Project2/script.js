// data store krna hai 

// 1.store the question
// 2.option ko store krna =4option
// 3.answer of question ko store krna

// e.g=
// question="Who has most centuries in world cricket?"
// options: ["Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Ricky Ponting"]
// answer: "Sachin Tendulkar"

// convert the objects into an arrray

// const questionbank=[obj1,obj2,,obj3...obj20]

// selection of 5 random questions from therse arrays



  
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

  function RandomQuestion(){
    
    //agar 1 question 1 baaar select ho jaaye tb wo doobara us set me naa ayye dhyaan rakho
    //use set to avoid same questions in 1 set

    const data=new Set();
    while(data.size!=5){
        const index=Math.floor(Math.random()*20);
        data.add(questionBank[index]);
    }

    return [...data] // convert set into array
  }


  // select the form and insert all the elements into it

  const form=document.querySelector('#quizForm');

  const problem=RandomQuestion(); 

  const original_answer={q1: "Sachin Tendulkar"};
  
  problem.forEach((obj,index)=>{


  const div_element=document.createElement('div');
  div_element.className='question';

  original_answer[`q${index+1}`]=obj['answer'];

  const para=document.createElement('p');
  //is paragraph ke andar question bharna from questionbank array se

  para.textContent=`${index+1}.${obj['question']}`; //java scipt ke variable k backticks ke madad se paragraph ke text me

  div_element.appendChild(para);

  //create 4 options

  obj['options'].forEach((data)=>{

    const label=document.createElement('label');
    const input=document.createElement('input');
    input.type='radio';
    input.name=`q${index+1}`;
    input.value=data;

    label.appendChild(input);
    label.appendChild(document.createTextNode(data));

    div_element.appendChild(label);
    div_element.appendChild(document.createElement('br'));

 

  })
  form.appendChild(div_element);
   

  })

  const button=document.createElement('button');
  button.type='submit';
  button.className="submit-btn";
  button.textContent="Submit";
  form.appendChild(button);


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
  



