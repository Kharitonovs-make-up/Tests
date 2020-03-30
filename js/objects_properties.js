// const person = Object.create({
//     calculateAge(){
//         return new Date().getFullYear() - this.birthYear;
//     }
// },
// {
//     name: {
//         value: 'Vasya',
//         enumerable: true,
//         writable: true,
//         configurable: true
//     },
//     birthYear: {
//         value: 1993,
//         enumerable: false,
//         writable: false,
//         configurable: true
//     },
//     age: {
//         enumerable: true,
//         get(){
//             return new Date().getFullYear() - this.birthYear;
//         }, 
//         set(value){
//             console.log('set age: ' + value);
//         }
//     }
// });

// const lena = {
//     name: {
//         value: 'Elena',
//         enumerable: false
//     },
//     birthYear: 1994
// };
// //person.name = 'Max';
// //console.log(lena);
// console.log(person);

// Object.defineProperty(person, 'birthYear', {
//     enumerable: true
// });
// for(let key in person){
//     if(person.hasOwnProperty(key)){
//         console.log(key + ': ' + person[key]);
//     }
// }

// let user = {
//     age: 16,
//     height: 17
// };
// Object.defineProperty(user, "age", {enumerable: true});
// let gg = {0:'f', 1: 'dd', 2:'ff'};
// let arr = Object.entries(gg);
// console.log(arr);
// let arr1 = [1,2,3,55,33];
// let arr2 = [2,4,33,22,11,'ff'];
// let arr = [...arr1, ...arr2];
// let arrSmall = [...arr.slice(3,5), ...arr.slice(7,10)];
// console.log(arrSmall);

// function sum(x, y, z) {
//     return x + y + z;
//   }  
//   const numbers = [1, 2, 3];
//   console.log(sum(...numbers));
//   // expected output: 6
//   console.log(sum.apply(null, numbers));

// let result = [];
// for (let link of document.links) {
//   result.push(link.href);
// }
// console.log(result);
// console.dir(document);

const people = [
  {name: 'Igor', age: 15, budget: 40000},
  {name: 'Elena', age: 22, budget: 30000},
  {name: 'Helen', age: 25, budget: 90000},
  {name: 'Vladilen', age: 25, budget: 50000}
];

// const amount = people
//   .filter(person => person.budget > 45000)
//   .map(person => {
//     return{
//       info: `${person.name} (${person.age})`,
//       budget: person.budget
//     };
//   })
//   .reduce((total, person) => {
//     return total + person.budget;
//   },1000);
// console.log(amount);

// const Person = new Object({
//   name: 'Helen',
//   age: 25,
//   greet(){
//     console.log('Heloo, friend');
//   }
// });
// Object.prototype.sayBye = function() {
//   console.log('Bye!');
// };
// const whoIsThis = {};
// const lena = Object.create(Person);
// let str = "i am string";

// console.log(Object.keys(Person));

// for(let i = 0; i<30; i++){
//   setTimeout(
//     ()=>console.log(i),100);
//     console.log(i+100);
// }
// const elem = document.getElementById("elem");
// const a = document.querySelector('a');
// //console.log(elem.getAttribute('About'));
// elem.setAttribute('age', 3);
// //console.log(elem.getAttribute('age'));
// // const attr = elem.attributes;
// // for(let i=0; i<attr.length; i++){
// //   console.log(`attribute №${i} (${attr[i].name}) имеет значение: ${attr[i].value}`);
// // }
// a.href = '/';
// console.log( 'атрибут:' + a.getAttribute('href') ); // '/'
// console.log( 'свойство:' + a.href );  // полный URL

// var user = {
//   firstName: "Василий",
//   surname: "Петров",
//   patronym: "Иванович"
// };

// function showFullName(firstPart, lastPart) {
//   console.log( this[firstPart] + " " + this[lastPart] );
// }
// // f.call(контекст, аргумент1, аргумент2, ...)
// showFullName.call(user, 'firstName', 'surname'); // "Василий Петров"
// showFullName.call(user, 'firstName', 'patronym'); // "Василий Иванович"

//рекурсивный обход сложного обьекта
let company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) { // случай (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма массива
  } else { // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}
console.log(sumSalaries(company)); // 6700