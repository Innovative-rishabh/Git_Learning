const restaurant=[];
const images=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth"];
const restaurant_name = [
    "Bukhara ",
    "Indian Accent ",
    "Karavalli ",
    "Barbeque Nation ",
    "Haldiram's ",
    "Olive Garden ",
    "Noma ",
    "Le Bernardin ",
    "The Fat Duck ",
    "Gaggan "
  ];
  const foodTypes = [
    "Italian",
    "Chinese",
    "Indian",
    "Mexican",
    "Thai",
    "Japanese",
    "Mediterranean",
    "American",
    "French",
    "Middle Eastern"
  ];

  const restaurantLocations = [
    "ITC Maurya, New Delhi, India",       // Bukhara
    "The Lodhi, New Delhi, India",        // Indian Accent
    "The Gateway Hotel, Bengaluru, India",// Karavalli
    "Multiple Cities, India",             // Barbeque Nation
    "Multiple Cities, India",             // Haldiram's
    "Multiple Cities, USA",               // Olive Garden
    "Copenhagen, Denmark",                // Noma
    "New York City, USA",                 // Le Bernardin
    "Bray, United Kingdom",               // The Fat Duck
    "Bangkok, Thailand"                   // Gaggan
  ];
  
  
  
  
for(let i=0;i<100;i++){
    const obj={};
    obj["image"]=images[Math.floor(Math.random()*10)];
    obj["name"]=restaurant_name[Math.floor(Math.random()*10)];
    obj["rating"]=(Math.random()*5+1).toFixed(2);
    obj["food_type"]=foodTypes[Math.floor(Math.random()*10)];
    obj["Price_For_Two"]=Math.floor(Math.random()*2401+100); //100-2500 ke beech me koi bhi number generate hoga
    obj["locations"]=restaurantLocations[Math.floor(Math.random()*10)];
    obj["distance_from_customers_house"]=(Math.random()*10+1).toFixed(2);
    obj["offers"]=Math.floor(Math.random()*30);
    obj["alchol"]=Math.random()>0.7;
    obj["restaurant_opening_time"]=Math.floor(Math.random()*24);
    obj["restaurant_closing_time"]= ((obj["restaurant_opening_time"]+12)%24);

    restaurant.push(obj);

}
console.log(restaurant);
//how to use this dummy data
//convert this array into json format(HW)

// const Restaurant = {
//     "Olive Garden": [
//       "Multiple Cities, India",
//       "Bangkok, Thailand",
//       "Bray, United Kingdom",
//       "ITC Maurya, New Delhi, India",
//       "Multiple Cities, USA",
//       "Copenhagen, Denmark",
//       "The Gateway Hotel, Bengaluru, India",
//       "Multiple Cities, India",
//       "Bangkok, Thailand",
//       "The Gateway Hotel, Bengaluru, India"
//     ],
//     "Barbeque Nation": [
//       "Multiple Cities, India",
//       "Copenhagen, Denmark",
//       "The Gateway Hotel, Bengaluru, India",
//       "Multiple Cities, India",
//       "New York City, USA",
//       "The Gateway Hotel, Bengaluru, India",
//       "Multiple Cities, India",
//       "The Gateway Hotel, Bengaluru, India",
//       "Copenhagen, Denmark",
//       "The Gateway Hotel, Bengaluru, India"
//     ],
//     "Le Bernardin": [
//       "Copenhagen, Denmark",
//       "Multiple Cities, India",
//       "New York City, USA",
//       "Bray, United Kingdom",
//       "Bray, United Kingdom",
//       "New York City, USA",
//       "Multiple Cities, India",
//       "The Lodhi, New Delhi, India",
//       "Bangkok, Thailand",
//       "Multiple Cities, USA"
//     ],
//     "Noma": [
//       "Multiple Cities, USA",
//       "Bangkok, Thailand",
//       "Copenhagen, Denmark",
//       "ITC Maurya, New Delhi, India",
//       "Copenhagen, Denmark",
//       "Multiple Cities, USA",
//       "Bangkok, Thailand",
//       "Copenhagen, Denmark",
//       "ITC Maurya, New Delhi, India",
//       "Multiple Cities, India"
//     ],
//     "Gaggan": [
//       "New York City, USA",
//       "Bray, United Kingdom",
//       "Copenhagen, Denmark",
//       "The Gateway Hotel, Bengaluru, India",
//       "Multiple Cities, India",
//       "Multiple Cities, USA",
//       "Bangkok, Thailand",
//       "The Lodhi, New Delhi, India",
//       "Multiple Cities, USA",
//       "Copenhagen, Denmark"
//     ],
//     "Haldiram's": [
//       "New York City, USA",
//       "Multiple Cities, India",
//       "The Lodhi, New Delhi, India",
//       "Copenhagen, Denmark",
//       "ITC Maurya, New Delhi, India",
//       "Multiple Cities, India",
//       "Bangkok, Thailand",
//       "Multiple Cities, India",
//       "The Gateway Hotel, Bengaluru, India",
//       "Bray, United Kingdom"
//     ],
//     "Karavalli": [
//       "ITC Maurya, New Delhi, India",
//       "Multiple Cities, India",
//       "The Gateway Hotel, Bengaluru, India",
//       "Bray, United Kingdom",
//       "Multiple Cities, India",
//       "The Gateway Hotel, Bengaluru, India",
//       "The Lodhi, New Delhi, India",
//       "Multiple Cities, India",
//       "Bray, United Kingdom",
//       "The Gateway Hotel, Bengaluru, India"
//     ],
//     "Indian Accent": [
//       "The Gateway Hotel, Bengaluru, India",
//       "The Lodhi, New Delhi, India",
//       "Copenhagen, Denmark",
//       "The Lodhi, New Delhi, India",
//       "Multiple Cities, India",
//       "Multiple Cities, USA",
//       "Bangkok, Thailand",
//       "The Lodhi, New Delhi, India",
//       "Multiple Cities, India",
//       "Copenhagen, Denmark"
//     ],
//     "Bukhara": [
//       "Bangkok, Thailand",
//       "Multiple Cities, India",
//       "The Lodhi, New Delhi, India",
//       "Multiple Cities, India",
//       "ITC Maurya, New Delhi, India",
//       "Multiple Cities, India",
//       "Bangkok, Thailand",
//       "Multiple Cities, India",
//       "The Lodhi, New Delhi, India",
//       "Copenhagen, Denmark"
//     ],
//     "The Fat Duck": [
//       "The Gateway Hotel, Bengaluru, India",
//       "ITC Maurya, New Delhi, India",
//       "New York City, USA",
//       "Copenhagen, Denmark",
//       "The Gateway Hotel, Bengaluru, India",
//       "Multiple Cities, USA",
//       "Bangkok, Thailand",
//       "Bray, United Kingdom",
//       "The Lodhi, New Delhi, India",
//       "Multiple Cities, India"
//     ]
//   };

function getrestaurant(){

    const root=document.getElementById('root');

    restaurants.forEach(restaurant=>{
//create a card
const card=document.createElemen('div');
card.classList.add('card');
//create image
const image=document.createElement("img");
image.src= `images/${restaurants.image}.jpeg`;

//card content
const card_content=document.createElement('div');
card_content.classList.add('card_cantent');
//card content ke andar ki div

//card header
const card_header=document.createElement('div');
card_header.classList.add('card_header');

const h3=document.createElement('h3');
h3.textContent=restaurants.name;

const rate=document.createElement('span');
rate.textContent=restaurants.rating;
rate.classList.add('rating');

card_header.appendChild(h3);
card_header.appendChild(span);




//card footer

const card_footer=document.createElement('div');
card_footer.classList.add('card_footer');

const food=document.createElement('span');
food.textContent=restaurants.food_type;

const price=document.createElement('span');
price.textContent=restaurants.Price_For_Two;

card_footer.appendChild(food);
card_footer.appendChild(price);

//card location wali div
const card_location=document.createElement('div');
card_location.classList.add('card_location');

const location=document.createElement('span');
location.textContent=restaurants.locations;

const distance=document.createElement('span');
distance.textContent=restaurants.distance_from_customers_house;

card_footer.appendChild(location);
card_footer.appendChild(distance);

//
card_content.appendChild(card_header);
card_content.appendChild(card_footer);
card_content.appendChild(card_footer);

//
card.appendChild(image);
card.appendChild(card_content);

//
root.appendChild(card);
})



}

  