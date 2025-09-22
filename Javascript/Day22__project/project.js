const quotes = [
    "सपने वो नहीं जो हम सोते समय देखते हैं, सपने वो हैं जो हमें सोने नहीं देते। — डॉ. ए.पी.जे. अब्दुल कलाम",
    "जिंदगी जीने के दो ही तरीके हैं, एक जो हो रहा है उसे सहते रहो या जिम्मेदारी लेकर उसे बदल दो। — अज्ञात",
    "हर सुबह एक नई उम्मीद लेकर आती है। — अज्ञात",
    "जिसे करना है वो रास्ता खोजता है, जिसे नहीं करना वो बहाना खोजता है। — अज्ञात",
    "हार मत मानो, बड़ी जीत अक्सर बड़ी हार के बाद ही मिलती है। — अज्ञात",
    "वही सफल होता है जो असंभव को संभव बना देता है। — अज्ञात",
    "जिंदगी में गिरना भी जरूरी है, तभी तो उठने का मज़ा आता है। — अज्ञात",
    "मनुष्य अपने विश्वास से निर्मित होता है। जैसा वह सोचता है वैसा वह बन जाता है। — भगवद्गीता",
    "सच्ची सफलता वही है जो आपके चरित्र को भी ऊँचा उठाए। — अज्ञात",
    "जितना कठिन संघर्ष होगा, जीत उतनी ही शानदार होगी। — अज्ञात",
    "बड़ा सोचो, जल्दी सोचो, आगे सोचो। — डॉ. ए.पी.जे. अब्दुल कलाम",
    "हजारों मील की यात्रा एक कदम से ही शुरू होती है। — लाओ त्सु",
    "अगर मेहनत आदत बन जाए तो सफलता मजबूरी बन जाती है। — अज्ञात",
    "संघर्ष जितना कठिन होगा, जीत उतनी ही शानदार होगी। — अज्ञात",
    "विश्वास वह शक्ति है जिससे उजड़ी हुई दुनिया में भी प्रकाश किया जा सकता है। — अज्ञात",
    "हर दिन अपनी जिंदगी का नया अध्याय लिखो। — अज्ञात",
    "कठिनाइयाँ जीवन का हिस्सा हैं, उनसे हारो मत, सीखो। — अज्ञात",
    "जो बदलता है वही आगे बढ़ता है। — अज्ञात",
    "कामयाबी उन्हीं को मिलती है जो अपने सपनों के लिए जीते हैं। — अज्ञात",
    "जो बीत गया उसकी चिंता मत करो, जो आने वाला है उसके लिए मेहनत करो। — अज्ञात"
  ];
  
  
  const gradients = [
    "linear-gradient(135deg, #74ebd5, #ACB6E5)",
    "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    "linear-gradient(135deg, #f6d365, #fda085)",
    "linear-gradient(135deg, #84fab0, #8fd3f4)",
    "linear-gradient(135deg, #ffecd2, #fcb69f)",
    "linear-gradient(135deg, #ff8177, #ff867a, #ff8c7f)",
    "linear-gradient(135deg, #cfd9df, #e2ebf0)",
    "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
    "linear-gradient(135deg, #d4fc79, #96e6a1)"
  ];

   //Jab given website me  Generate  button press kare tb function execute ho


  const Button=document.querySelector('button');
  Button.addEventListener('click' ,(event)=>{
  
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientY);
    const text = document.getElementById("quote");
  
    // random quote
    const index = Math.floor(Math.random() * quotes.length);
    text.textContent = quotes[index];
  
    // random color
    const gradientIndex = Math.floor(Math.random() * gradients.length);
    document.body.style.background = gradients[gradientIndex];

  })

  //Jab keyboard ka koi bhi button press kare tb function execute ho

  // document.addEventListener('keydown',(event)=>{
  //   // console.log(event.key);

  //   if(event.key=="Shift"){
  //     const text = document.getElementById("quote");
  
  //   // random quote
  //   const index = Math.floor(Math.random() * quotes.length);
  //   text.textContent = quotes[index];
  
  //   // random color
  //   const gradientIndex = Math.floor(Math.random() * gradients.length);
  //   document.body.style.background = gradients[gradientIndex];
  //   }


  // })
  
  
  
  

  