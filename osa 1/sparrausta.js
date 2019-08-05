//Get current day
let yeet = new Date();
let dayNumber = yeet.getDay();
const days = ["Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai", "Sunnuntai"];

//Get current time
let hour = yeet.getHours();
let minutes = yeet.getMinutes();
let seconds = yeet.getSeconds();

if (minutes < 10) {
  minutes = "0" + minutes;
}

console.log(`Today is:  ${days[dayNumber]}`);
console.log(`Current time is: ${hour}:${minutes}:${seconds}`);
