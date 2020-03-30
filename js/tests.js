// let a = new Array(1,2), b = new Array(3);
// console.log(a[0] + b[0]);

// if (function f(){}) {
//   console.log(typeof f);
// }

// let a = 1;
// let b = { toString() {return '1'} };
// let c = 1;
// console.log(a+b+c);

// let X = '';
// let a = X;
// console.log( a == X ); // false

// f.call(f);

// function f() {
//   console.log( this );
// }

// function F() { return F; }

// console.log( new F() instanceof F );
// console.log( new F() instanceof Function );

// f.call(null);

// function f() {
//   console.log(this);
// }

// let a = new Boolean(0);
// console.log(a);

//console.log(Math.sqrt(4));

// for(let key in  {2:1, 4:0}) {
//   console.log(key.value);
//  }

//console.log(null + {0:1}[0] + [,[1],][1][0]);

// function f() {
//   let a = 5;
//   return new Function('b', 'return a + b');
// }

// console.log( f()(1) );

// let a = 64;
// console.log(a >> 1);

// f.call(null);
// function f() {
//   console.log(this);
// }

// console.log(4 - "5" + 0xf - "1e1");
// console.log(0xf);
// console.log(1 - "1e1");

// console.log(str); // ?
// let str = "Hello";

// if (function f(){}) {
//   console.log(typeof f);
// }

// let user = {
//   sayHi: function() {
//     console.log(this);
//   }
// };

// (user.sayBye = user.sayHi)();

// let obj = {
//   "0": 1,
//   0: 3
//  };

//  console.log( obj["0"] + obj[0] );

// for(var i=0; i<10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 0);
// }

// let f = function g() { return 23; };

// console.log( typeof g() );
// let i = 0;
// function log(){
//   if(i > 2){
//     clearTimeout(timerId);
//     console.log(timerId);
//     return false;
//   }
//   console.log(`${timerId}, ${i}`);
//   i += 1;
//   timerId = setTimeout(log, 2000);
// }
const numbersDiv = document.querySelector('#numbers');

// function printNumbers(from, to) {
//   if (from > to) {
//     return false;
//   } else {
//     let current = from;
//     let timerId = setInterval(function () {
//       numbersDiv.innerHTML = current;
//       if (current == to){
//         clearInterval(timerId);
//       }
//       current++;
//     }, 1000);
//   }
// }
// function printNumbers(from, to){
//   if(from > to){
//     return false;
//   } else{
//     let current = from;

//   }
// }
// printNumbers(2, 9);
// let a = new Date().getTime();
// let b  = new Date(2019, 8, 1).getTime();
// console.log((b - a)/3600000);

// function slow(x) {
//   // здесь могут быть ресурсоёмкие вычисления
//   console.log(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {    // если кеш содержит такой x,
//       return cache.get(x); // читаем из него результат
//     }

//     let result = func(x); // иначе, вызываем функцию

//     cache.set(x, result); // и кешируем (запоминаем) результат
//     return result;
//   };
// }

// slow = cachingDecorator(slow);

// console.log( slow(1) ); // slow(1) кешируем
// console.log( "Again: " + slow(1) ); // возвращаем из кеша

// console.log( slow(2) ); // slow(2) кешируем
// console.log( "Again: " + slow(2) ); // возвращаем из кеша

const arrNum = [1,2,3,4,5,6,6,7];
const arrStr = ["one", "two", "three"];
const arrObj = {"four": 4, "five": 5};

const makeNew = (obj1, obj2) => Object.assign(obj1, obj2);
console.log(makeNew(arrObj));