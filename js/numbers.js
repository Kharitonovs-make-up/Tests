// let a = Number(prompt("put"));
// let b = 6;
// console.log(a+b);
//alert({}.__proto__.toString);

//let text = document.getElementById('text');
// for(let i=2; i<100; i++){
//   let counter=1;
//   for(let j=2; j<=i; j++){
//     if(i % j == 0){
//       counter++;
//     }
//   }
//   if(counter<=2){
//     text.innerHTML += i + " Делители этого числа: " + "1" + " и " + i + "<br>";
//   }
// }

//Решето Эратосфена
// function sieve(n){
// 	let S = []; 
// 	S[1] = 0; // 1 - не простое число
// 	// заполняем решето единицами
// 	for(let k=2; k<=n; k++){
// 		S[k]=1;
//     }
// 	for(let k=2; k*k<=n; k++){
// 		// если k - простое (не вычеркнуто)
// 		if(S[k]==1){ 
// 			// то вычеркнем кратные k
// 			for(let l=k*k; l<=n; l+=k){
// 				S[l]=0;
// 				}
// 			}
// 		}
// 	return S;
// }
    
// let arr = sieve(100);
// for(let i=0; i<100; i++){
//     if(arr[i] == 1){
//         arr[i] = i;
//         console.log(arr[i]);
//     }
// }


// let date  = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();
// let day = date.getDate();
// let seconds = date.getSeconds();
// let dayOfWeek = date.getDay();
// let hours = date.getUTCHours();
//console.log(date.getTime());//кол-во  мс пройденных от 1 января 1970г
//console.log(date.getTimezoneOffset());
//date.setUTCHours(17, 16, 16, 16);

// function getWeekDay(date) {
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  
//     return days[date.getDay()];
// }

// function getDateAgo(date, days) {
//     let dateCopy = new Date(date);
//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy;
// }
// function getSecondsToday() {
//     var now = new Date();
  
//     // создать объект из текущей даты, без часов-минут-секунд
//     var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//     var diff = now - today; // разница в миллисекундах
//     return Math.floor(diff / 1000); // перевести в секунды
//   }

//   alert( getSecondsToday() );

// //let date = new Date();
// alert(getSecondsToday());
//alert( getWeekDay(date) );
// let str = "ss`\u00A9`fff";
// console.log(str);
// alert(str);

//функция форматирования даты в человеческий вид
// function formatDate(date) {

//     var dd = date.getDate();
//     if (dd < 10) dd = '0' + dd;
  
//     var mm = date.getMonth() + 1;
//     if (mm < 10) mm = '0' + mm;
  
//     var yy = date.getFullYear() % 100;
//     if (yy < 10) yy = '0' + yy;
  
//     return dd + '.' + mm + '.' + yy;
//   }
  
//   var d = new Date(); // 30 Янв 2014
//   alert( formatDate(d) ); // '30.01.14'
// прочитать класс элемента
 // main page

// поменять класс элемента
// document.body.className = "class1 class2";
// alert( document.body.className );
// const person = {
//     age: 25,
//     name: "Vasya",
//     greet: function(){
//         console.log("Hello, i am "+ person.name + "and i am " + person.age + "years old");
//     }
// };
// const lena = new Object({
//     name: "Elena"
// });
// lena.prototype = person;
// console.log('start 1');
// setTimeout(function start(){
//     console.log('timeout 2s');
// },2000);

