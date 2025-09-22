// based on months
const zodiacSigns = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius"
  ];
// based on date
  const compliments = [
    "You have a brilliant mind!",
    "Your smile can brighten anyone’s day.",
    "You are incredibly kind.",
    "You bring out the best in people.",
    "Your positivity is contagious.",
    "You have a great sense of humor.",
    "Your creativity is inspiring.",
    "You are stronger than you think.",
    "Your confidence is admirable.",
    "You make people feel comfortable.",
    "You have an amazing energy.",
    "You are a great listener.",
    "Your ideas are always refreshing.",
    "You are so thoughtful.",
    "You radiate warmth and kindness.",
    "You are truly hardworking.",
    "Your presence makes everything better.",
    "You are brave and courageous.",
    "You have a heart of gold.",
    "You are wise beyond your years.",
    "You always know how to make people smile.",
    "Your style is amazing.",
    "You are full of brilliant ideas.",
    "You make the world a better place.",
    "You are unstoppable when you set your mind to something.",
    "You are a true problem solver.",
    "You inspire everyone around you.",
    "You are unique and special.",
    "You handle challenges with grace.",
    "You have such a beautiful soul.",
    "You light up every room you walk into."
  ];
// size is 31
  const victimCards = [
    "You always do good for others but never get the same in return.",
    "You sacrifice so much, yet nobody notices.",
    "You are always there for people, but they disappear when you need them.",
    "You give your best, but people still criticize you.",
    "You care deeply, but people take you for granted.",
    "You always forgive, but nobody values your kindness.",
    "You put others first, but they never prioritize you.",
    "You listen to everyone’s problems, but no one listens to yours.",
    "You help others rise, but they push you down.",
    "You never say no, but people still complain.",
    "You keep everyone’s secrets, but yours are betrayed.",
    "You try to make people happy, but they leave you sad.",
    "You stand by people, but they walk away from you.",
    "You respect everyone, but you rarely get respect back.",
    "You remember little things for others, but they forget about you.",
    "You always give second chances, but no one gives you one.",
    "You never expect much, but even that little is denied.",
    "You stay loyal, but people cheat your trust.",
    "You motivate others, but no one motivates you.",
    "You put effort into relationships, but they fade anyway.",
    "You make people feel special, but feel invisible yourself.",
    "You always compromise, but others stay rigid.",
    "You give without asking, but no one offers you anything.",
    "You stand strong for others, but are left alone when weak.",
    "You celebrate others’ success, but your wins go unnoticed.",
    "You forgive mistakes, but yours are never forgotten.",
    "You stay honest, but people lie to you.",
    "You always adjust, but people never adjust for you.",
    "You fight for people, but nobody fights for you.",
    "You keep promises, but others break theirs.",
    "You love deeply, but receive only half-hearted love."
  ];
// size is 31
  const recommendations = [
    "Feeding a street dog.",
    "Planting a tree or watering plants.",
    "Helping an elderly person cross the road.",
    "Donating clothes you don’t use anymore.",
    "Complimenting someone sincerely.",
    "Practicing gratitude every morning.",
    "Drinking enough water for good health.",
    "Spending quality time with family.",
    "Reading at least 10 pages of a good book.",
    "Calling a friend you haven’t spoken to in a while.",
    "Sleeping on time and waking up early.",
    "Exercising or going for a walk.",
    "Helping a child with studies.",
    "Donating food to someone in need.",
    "Writing down your goals for the day.",
    "Meditating for at least 10 minutes.",
    "Sharing knowledge with someone.",
    "Smiling at strangers and spreading positivity.",
    "Reducing screen time for mental peace.",
    "Cooking a healthy meal for yourself or family.",
    "Practicing kindness without expecting anything in return.",
    "Volunteering for a local cause.",
    "Learning something new every day.",
    "Spending time in nature.",
    "Cleaning your surroundings.",
    "Avoiding gossip and negative talk.",
    "Saving a small amount of money daily.",
    "Being patient and calm in stressful situations.",
    "Encouraging someone who is struggling.",
    "Spending time with yourself in silence.",
    "Helping a co-worker or classmate without being asked."
  ];
  // size is 20
  const predictions = [
    "You will become a crorepati after some time.",
    "A big opportunity is coming your way soon.",
    "You will travel to a dream destination in the near future.",
    "Your hard work will pay off and bring success.",
    "You will meet someone who will change your life positively.",
    "A surprise gift is waiting for you soon.",
    "Your financial condition will improve greatly.",
    "You will achieve something that you once thought impossible.",
    "Happiness and peace will soon enter your life.",
    "You will buy your dream home one day.",
    "Your skills will bring you unexpected fame.",
    "You will soon reconnect with someone from your past.",
    "A business idea will turn into a huge success.",
    "Your positive energy will attract new opportunities.",
    "You will become an inspiration for many people.",
    "Soon, you will celebrate a big achievement.",
    "You will live a long, healthy, and happy life.",
    "Your kindness will bring blessings to your life.",
    "You will soon get recognition for your talent.",
    "A big dream of yours will come true in the near future."
  ];


  const form = document.querySelector('#astroForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const date = Number(document.getElementById('date').value);
  const month = Number(document.getElementById('month').value);
  const year = Number(document.getElementById('year').value);

  const result = document.getElementById('result');

  const first_message = `Hello ${name} ${surname}`;
  const second_message = `Your Zodiac sign is ${zodiacSigns[month - 1]}`;
  const third_message = compliments[date - 1];

  let index = (name.length + surname.length + date + month + year) % 31;
  const fourth_message = victimCards[index];

  index = (name.length * surname.length * year) % 31;
  const fifth_message = recommendations[index];

  index = (date * month * year) % 20;
  const sixth_message = predictions[index];

  result.innerHTML = `
    <h2>${first_message}</h2>
    <p>${second_message}</p>
    <p><strong>Compliment:</strong> ${third_message}</p>
    <p><strong>Victim Card:</strong> ${fourth_message}</p>
    <p><strong>Recommendation:</strong> ${fifth_message}</p>
    <p><strong>Prediction:</strong> ${sixth_message}</p>
  `;
});
