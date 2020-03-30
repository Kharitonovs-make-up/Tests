// function makeCounter() {
//   let count = 0;
//   return function() {
//     return count++;
//   };
// }
// let counter1 = makeCounter();
// let counter2 = makeCounter();
// console.log( counter1() ); // 0
// console.log( counter1() ); // 1

// console.log( counter2() ); // 0 (независимо)

// функция-конструктор возвращает новый объект
// function User(name) {

//   // методом объекта становится вложенная функция
//   this.sayHi = function() {
//     alert(name);
//   };
// }
// let user = new User("John");
// user.sayHi(); // у кода метода "sayHi" есть доступ к внешней переменной "name"
// console.dir(user.sayHi);

// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } 
//   // else if(n<0){
//   //   return 1 / (x * pow(x, n + 1));
//   // } 
//   else {
//     return x * pow(x, n - 1);
//   }
// }

// alert( 1/ pow(2, 3) ); // 8
// alert(1/3);
// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// let [firstName, , title] = arr;
// console.log(title);
// title = "Tsar";
// console.log(arr);

// let options = {
//   height: 200,
//   title: "Menu",
//   width: 100
// };

// let {title, width, height} = options;

// console.log(title);  // Menu
// console.log(width);  // 100
// console.log(height); // 200

// let user = { name: "John", years: 30 };
// let name,
//     years,
//     isAdmin;
// ({name, years: age, isAdmin = false} = user);
// console.log(age);
// console.log(isAdmin);

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250,
//   "Sanya": 301
// };
// function topSalary(salaries) {
//   let max = 0;
//   let maxName = null;
//   for(const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }
//   return maxName;
// }
// console.log(topSalary(salaries));

// function printArgs(...arr) {
//   // вызов arr.slice() скопирует все элементы из this в новый массив
//   //let arguments = 4;
//   console.log(arguments);
//   //var args = [].slice.call(arguments);
//   console.log(arr[1]); // args - полноценный массив из аргументов
// }

// printArgs('Привет', 'мой', 'мир'); // Привет, мой, мир

// var res1 = 55;
// let res2 = 54;
// console.log(window);
// console.log(window.res1);
// console.log(window.res2);
let i =0;
function start(){
  console.log("Hello"+ i++);
}
// confirm("Are you sure?") && start();