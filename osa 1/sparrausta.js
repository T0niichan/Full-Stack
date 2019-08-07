

/*Get current day
let yeet = new Date();
let dayNumber = yeet.getDay();
const days = ["Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai", "Sunnuntai"];

//Get current time
let hour = yeet.getHours();
let minutes = yeet.getMinutes();
let seconds = yeet.getSeconds();

//Check and change numbers to more readalbe form if needed.
if (minutes < 10) {
  minutes = "0" + minutes;
}
if (hour < 10) {
  hour = "0" + hour;
}
if (seconds < 10) {
  seconds = "0" + seconds;
}

console.log(`Today is:  ${days[dayNumber]}`);
console.log(`Current time is: ${hour}:${minutes}:${seconds}`);


//printa sivu napista
function printtaaSivu(){
  window.print();
}

//get full current date
let day = new Date;

let paivat = day.getDay();
let kuukausi = day.getMonth();
let vuosi = day.getFullYear();
let isInteger;

if (kuukausi < 12) {
  kuukausi = kuukausi + 1;
}

console.log(`${paivat}.${kuukausi}.${vuosi}`);
*/

//joululaskuri


const paivaNumero = 358;
let paiviaVuodessa = 365
let karkausvuosi = 366;
let paivienMaara;
let date = new Date();
const reducer = (accumulator, currentValue) => accumulator + currentValue;

const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

if (month == 0, 2, 4, 6, 7, 9, 11) {
  paivienMaara = 31;
}else if (month == 3, 5, 8, 10) {
    paivienMaara = 30;
}else if (isInteger == true && month == 1) {
  paivienMaara = 29;
}else {
    paivienMaara = 28;
}

let dayNumber = (month.reduce(reducer));



if (currentMonth == Arraymonth) {
  month.reduce();
}






/*
0	tammikuu	31
2	maaliskuu	31
4	toukokuu	31
6	heinäkuu	31
7	elokuu	31
9	lokakuu	31
11	joulukuu	31

1	helmikuu	28 *
3	huhtikuu	30
5	kesäkuu	30
8	syyskuu	30
10	marraskuu	30
*/
