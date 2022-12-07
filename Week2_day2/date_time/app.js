let val;
const today=new Date();

let todayDate = new Date("2022-12-06");

console.log(todayDate.getDate());
console.log(todayDate.getDay() );
console.log(todayDate.getMonth() );
console.log(todayDate.getFullYear());
console.log(todayDate.getHours() );
console.log(todayDate.getMinutes());

console.log(todayDate);
console.log(today);

todayDate.setDate(2);
todayDate.setMonth(10);
todayDate.setFullYear(2000);

console.log(todayDate);

