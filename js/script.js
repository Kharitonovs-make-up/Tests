//console.log('[] + 1 + 2: ', [] + 1 + 2);
//alert(typeof( "1"[0] ));
//console.log(2 && 1 && null && 0 && undefined);
// let a = 1;
// let b = 2;
// console.log(!( a && b ) );
// console.log((b && a));
//alert( undefined && null );
//a = [1, 2, 3]; b = [1, 2, 3]; 
//console.log(a == b );

//console.log("ёжик" > "яблоко");

// var store = {}; // объект для коллекции

// var items = ["div", "a", "form"];

// for (var i = 0; i < items.length; i++) {
//   var key = items[i]; // для каждого элемента создаём свойство
//   store[key] = true; // значение здесь не важно
// }
// searchWord = prompt("Введите слово для поиска");
// if(store[searchWord]){
//     console.log("оно тут!");
// }
// arr = new Array(6).join("ля");
// console.log(arr);
// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   }
  
//   var arr = [ 3, 2, 15 ];
  
//   arr.sort(compareNumeric);
  
//   alert(arr);  // 1, 2, 15
// function sum(arg1, arg2, arg3) {
//     switch (typeof arg3) {
//         case "undefined":
//             return arg1 + arg2;
//         case "number":
//             return arg1 + arg2 + arg3;
//         default:
//             return arg1 + arg2 + " (" + arg3 + ")";
//     }
// }

// console.log(sum(3, 4));
// console.log(sum(3, 4, 5));
// console.log(sum(3, 4, "!"));
// console.log(sum(3, 4, 5, 4, 33, '!'));
// function learnJs(lang, callback) {
//     console.log('Я учу ' + lang);
//     callback();
// }
// learnJs('JavaScript', done);
// function done(){
//     console.log('Я прошел 3-й урок!');
// }
// var str = "строка";
// var str1 = 'к';
// str[1] = str1;

// alert( str ); // ока
// var a = new Number('123'); // a === 123 is false
// console.log(a);
// var b = Number('123'); // b === 123 is true
// console.log(b);
//console.log(a instanceof Number); // is true
//console.log(b instanceof Number);

//Быстрая сортировка
// const qsort = (arr) => {
// 	if (arr.length < 2) {
// 		return arr;
// 	} else {
//     		// Опорная точка для деления массива, выбирается случайно
// 		const pivotPosition = Math.floor(Math.random() * arr.length);
// 		const pivot = arr[pivotPosition];
// 		// Значения меньшие, либо равные опорному 
// 		// попадают в новый массив less
// 		const less = arr.filter((value, index) => {
// 			const isPivot = index === pivotPosition;
// 			return !isPivot && (value <= pivot);
// 		});
// 		// Значения, которые больше опорного
// 		// попадают в новый массив less
// 		const greater = arr.filter(value => value > pivot);
		
// 		/***
// 		/* Более оптимальное решение — использовать цикл и разделить массив за одну итерацию
// 		/* let less = [];
// 		/* let greater = [];
// 		/* for (let i = 0; i < arr.length; i++) {
// 		/*	const isPivot = i === pivotPosition;
// 		/*	if(arr[i] <= pivot && !isPivot) {
// 		/*		less.push(arr[i])
// 		/*	} else if (arr[i] > pivot) {
// 		/*		greater.push(arr[i]);
// 		/*	}
// 		/*}
// 		 **/
		
// 		return [...qsort(less), pivot, ...qsort(greater)];
// 	}
// };
//let arr  = [5, 66, 3254, 44, 22, 95, 6, 76];
// const arr = [1, 213, 3, 5, 2, 8, 7];
// console.log(qsort(arr));

// console.log(Math.cos(Math.PI));
// let a = {
//     furniture: 'chair'
// };

// const bubbleSort = arr => {
//     for (let i = 0, endI = arr.length - 1; i < endI; i++) {
//         let wasSwap = false;
//         for (let j = 0, endJ = endI - i; j < endJ; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 wasSwap = true;
//             }
//         }
//         if (!wasSwap) {break;}
//     }
//     return arr;
// };
// bubbleSort(arr);

// const insertionSort = arr => {  //сортировка вставками
//     for (let i = 1, l = arr.length; i < l; i++) {
//         const current = arr[i];
//         let j = i;
//         while (j > 0 && arr[j - 1] > current) {
//             arr[j] = arr[j - 1];
//             j--;
//         }
//         arr[j] = current;
//     }
//     return arr;
// };

// insertionSort(arr);


//шейкерная сортировка
// function swap(arr, i, j) {
//     var swap = arr[i];
//     arr[i] = arr[j];
//     arr[j] = swap;
// }

// function cocktailSort(arr) {
//     var left = 0;
//     var right = arr.length - 1;
//     while (left < right) {
//         for (var i = left; i < right; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 swap(arr, i, i + 1);
//             }
//         }
//         right--;
//         for (i = right; i > left; i--) {
//             if (arr[i] < arr[i - 1]) {
//                 swap(arr, i, i - 1);
//             }
//         }
//         left++;
//     }
//     return arr;
// } //шейкерная сортировка
// cocktailSort(arr);
// console.log(arr);

// function CoffeeMachine(power){
//         this._power = power;
//         this._waterAmount = 0;
//     } 
//     CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

//     CoffeeMachine.prototype._getTimeToBoil = function() {
//         return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
//       };

//     CoffeeMachine.prototype.run = function(){
//         setTimeout(function() {
//             alert( 'Кофе готов!' );
//           }, this._getTimeToBoil());
//     };

//     CoffeeMachine.prototype.setWaterAmount = function(amount) {
//         this._waterAmount = amount;
//     };
   
//     var coffeeMachine = new CoffeeMachine(10000);
//     coffeeMachine.setWaterAmount(50);
//     coffeeMachine.run();

// function CaffeeMachine(power) {
//     var waterAmount = 0;
  
//     var WATER_HEAT_CAPACITY = 4200;
  
//     function getTimeToBoil() {
//       return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }
  
//     this.run = function() {
//       setTimeout(function() {
//         alert( 'Кофе готов!' );
//       }, getTimeToBoil());
//     };
  
//     this.setWaterAmount = function(amount) {
//       waterAmount = amount;
//     };
  
//   }


//Перебор обьектов + измерение пройденного времени
// var start = new Date(); // засекли время

// function isEmpty(obj) {
//     for (var key in obj) {
//         console.log('dd ');
//         return false;  
//     }
//     return true;
//   }  
//   var schedule = {};
  
//   //alert( isEmpty(schedule) ); // true
  
//   schedule.age = 22;
//   schedule.height = 180;
  
//   alert( isEmpty(schedule) ); // false
//   var end = new Date(); // конец измерения
//   alert( "Цикл занял " + (end - start) + " ms" );

// Тесты на время
// var arr = [];
// for (var i = 0; i < 1000; i++) {arr[i] = 0;}

// function walkIn(arr) {
//   for (var key in arr) {arr[key]++;}
// }

// function walkLength(arr) {
//   for (var i = 0; i < arr.length; i++) {arr[i]++;}
// }

// function bench(f) {
//   var date = new Date();
//   for (var i = 0; i < 10000; i++) {f(arr);}
//   return new Date() - date;
// }

// alert( 'Время walkIn: ' + bench(walkIn) + 'мс' );
// alert( 'Время walkLength: ' + bench(walkLength) + 'мс' );

//многократный прогон
// var arr = [];
// for (var i = 0; i < 1000; i++) {arr[i] = 0;}

// function walkIn(arr) {
//   for (var key in arr) {arr[key]++;}
// }

// function walkLength(arr) {
//   for (var i = 0; i < arr.length; i++) {arr[i]++;}
// }

// function bench(f) {
//   var date = new Date();
//   for (var i = 0; i < 100; i++) {f(arr);}
//   return new Date() - date;
// }

// // bench для каждого теста запустим много раз, чередуя
// var timeIn = 0,
//   timeLength = 0;
// for (var i = 0; i < 100; i++) {
//   timeIn += bench(walkIn);
//   timeLength += bench(walkLength);
// }

// alert( 'Время walkIn: ' + timeIn + 'мс' );
// alert( 'Время walkLength: ' + timeLength + 'мс' );

// const ul = document.querySelector('ul');
// const li2 = ul.querySelector('li:nth-Child(2)');
// console.log(li2);

// function User(name, id){
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   let lenght = 7;
//   this.len = lenght;
// }
// let ivan = new User('Ivan', 23);
// let sarra = new User('Sarra', 20);
// User.prototype.exit = function(){
//   console.log(`пользователь ${ivan} ушел`);
// };
// // console.log(ivan);
// // console.log(sarra.exit());

// var o = { p: 1, p: 2, z:6 };
// for(let i in o){
//   console.log(i);
// }
