// const d=new Date();
// console.log(d); // this will give international time zone  in output
// console.log(d.toDateString()); // gives aaj ka day month date and year as string
// console.log(d.toString());//this will give international time zone  in output in string format
// console.log(d.toISOString());
// console.log(typeof d);

// from where it is bringing  date for js
// ans: from my system clock so if i alter tyme in my system i am going to get an altered time as output
// const d1=new Date(1000);
// const d2=new Date(2000);

// console.log(d1);// all these d1 and d2 are going to calculate time and date in milliseconds from January-1-1970 (12 baje raat) se
// console.log(d2);

// const d=new Date();
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getMonth());
// console.log(d.getHours());
// console.log(d.getFullYear());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());

//Millisecond in JS is known as time stamp as it plays important role in comparing marginal time differrencces e.g-while booking train tatkaal tickets
// const d=new Date();
// console.log(d.getTime()); // It reurns milliseconds from 01-01-1970(12 baje raat se kitna millisecond hua ab tk wo batata hai)
// //another way to get time stamp
// const now= Date.now();
// console.log(now); 

//custom date
// const d=new Date("2020-02-03");
// console.log(d);
// console.log(d.toDateString());

// Date caculation
// const date1= new Date();
// const date2 = new Date ("2026-04-21");

// console.log(date2-date1);// gives answer in milliseconds
// console.log(date2>date1);// gives true if date

// count down for olympics
// days,hour,minute,seconds
const date1=new Date();
const date2=new Date("2028-07-14T00:00:00");
const date=date2-date1;
const day=Math.floor(date/(1000*60*60*24));
console.log(day);
const hour = Math.floor ((date/ (1000*60*60))%24);
console.log(hour);
const minute = Math. floor ((date/ (1000*60)%60));
console.log(minute);
const second = Math. floor ((date/ (1000))%60);
console.log(second);

console.log(`Olynpics Countdown Time: Days:${day} Hours:${hour} Minutes:${minute} Seconds:${second}`);



