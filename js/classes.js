// class Animal {
// 	constructor(options) {
// 		this.name = options.name;
// 		this.age = options.age;
// 		this.hasTail = options.hasTail;
// 	}
// 	// static type = 'ANIMAL'
// 	voice() {
// 		return 'i am animal!';
// 	}
// }
// const animal = new Animal({
// 	name: 'Wolf',
// 	age: 5,
// 	hasTail: true
// });

// class Cat extends Animal {
// 	// static type = 'CAT'
// 	constructor(huo) {
// 		super(huo);
// 		this.color = huo.color;
// 	}
// 	voice() {
// 		console.log('super.voice(): ', super.voice());
// 		console.log('i am cat!');
// 	}
// get ageInfo(){
//     return 7*this.age;
// }
// set ageInfo(newAge){
//     this.age = newAge;
// }
// }
// const cat = new Cat({
// 	name: 'Trishka',
// 	age: '3',
// 	hasTail: true,
// 	color: 'orange'
// });

// //статические методы
// class Point {
// 	constructor(x, y) {
// 		this.x = x;
// 		this.y = y;
// 	}
// 	//такой метод вызывается без инстанцирования(созд. экземляров класса)
// 	static distance(a, b) {
// 		const dx = a.x - b.x;
// 		const dy = a.y - b.y;
// 		//квадратный корень из суммы аргументов
// 		return Math.hypot(dx, dy);
// 	}
// }
// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
// //Статические методы, часто используются для создания служебных функций
// console.log(Point.distance(p1, p2));

//прототипные и статич. методы без привязки к "this" объекта
// class Animal { 
//   speak() {
//     return this;
//   }
//   static eat() {
//     return this;
//   }
// }
// let obj = new Animal();
// obj.speak(); // Animal {}
// let speak = obj.speak;
// speak(); // undefined

// Animal.eat(); // class Animal
// let eat = Animal.eat;
// eat(); // undefined

//Если мы напишем этот же код используя классы основанные на функциях,
//тогда произойдет автоупаковка основанная на значении "this",
//в течение которого функция была вызвана. 
// function Animal() { }
// Animal.prototype.speak = function(){
//   return this;
// };
// Animal.eat = function() {
//   return this;
// };
// let obj = new Animal();
// //паттерн модуль - самовызыв. ф-ия
// (function module(){
// 	let speak = obj.speak;
// 	console.log(speak()); // глобальный объект
// }());
// let eat = Animal.eat;
// eat(); // глобальный объект

// function Animal (name) {
//   this.name = name;  
// }
// Animal.prototype.speak = function () {
//   console.log(this.name + ' издает звук.');
// }
// class Dog extends Animal {
//   // speak() {
//   //   console.log(this.name + ' лает.');
//   // }
// }
// const d = new Dog('Митци');
// d.speak();

//

// const Animal = {
//   speak() {
//     console.log(this.name + ' издает звук.');
//   }
// };
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
//   // speak() {
//   //   console.log(this.name + ' лает.');
//   // }
// }
//наследование от объекта, так как extends невозможно
// Object.setPrototypeOf(Dog.prototype, Animal);
// const d = new Dog('Митци');
// d.speak();

// инкапсуляция - реализ-ия приватности
// Функция конструктор 
// let Person = function(name) {
//   // Приватная функция
//   const log = function(message) {
//     console.log(message + ' in class');
//   };
//   // Публичное свойство
//   this.name = name;
//   // Публичный метод
//   this.logger = function(message) {
//     log('Public ' + message);
//   };
// };
// let person = new Person('Johnik');
// person.logger('encapsulation');

// let obj = {
// 	name: 'Sam',
// 	age: 26,
// 	job: 'streetCleaner'
// };
// let obj2 = {
// 	name: 'Sa3m',
// 	age: 25,
// 	job: 'str222eetCleaner'
// };
// const entries = [
// 	['name', 'Sam'],
// 	['age', 26],
// 	['job', 'streetCleaner']
// ];
// // console.log(Object.entries(obj));
// // console.log(Object.fromEntries(entries));
// const map = new Map([
// 	['name', 'Sam'],
// 	['age', 26],
// 	['job', 'streetCleaner'],
// 	['ss', 26],
// 	['sss', 24]
// ]);
// let wife = true;
// map
// 	.set('pay', 25000)
// 	.set(wife, false);

// function makeArr(){
// 	let arr= [];
// 	for(let key of map.values()){
// 		arr.push(key);
// 	}
// 	return arr;
// }

// // const weakmap = new WeakMap([
// // 	[obj, 22],
// // 	[obj2, 24]
// // ]);
// // //obj = null;
// // console.log(weakmap.has(obj));
// // console.log(weakmap);
// const set = new Set(makeArr());
// console.log(set);

//===========наследование============//
// функция конструктор
// const Person = function(name) {
//   this.name = name + ' Doe';
// };
// // запись метода в прототип
// Person.prototype.sayName = function() {
//   console.log(this.name);
// };
// // Вызов конструктора родителя внутри дочернего 
// // конструктора для записи всех свойств
// const GreatPerson = function(name, phrase) {
//   Person.apply(this, arguments);
//   this.phrase = phrase;
// };
// // Перезапить прототипа дочернего конструктора
// GreatPerson.prototype = Object.create(Person.prototype);
// GreatPerson.prototype.sayPhrase = function() {
//   console.log(this.name + ' says: "' + this.phrase + '"');
// };
// // создание нового объекта
// const john = new Person('John');
// const jane = new GreatPerson('Jane', 'Hello, World!');
// john.sayName(); // John Doe
// jane.sayName(); // Jane Doe
// jane.sayPhrase(); // Jane Doe says: "Hello, World!"

//Дед попугай с двумя лапами
// const ParrotGrandfather = function() {};
// ParrotGrandfather.prototype = {
//   species: 'Parrot',
//   paws: 2
// };
// // Отец попугай унаследовал всё у деда
// const ParrotFather = function() {};
// ParrotFather.prototype = Object.create(ParrotGrandfather.prototype);

// // Сын попугай унаследовал всё у отца
// const ParrotSon = function() {};
// ParrotSon.prototype = Object.create(ParrotFather.prototype);

// const grandfather = new ParrotGrandfather();
// const father = new ParrotFather();
// const son = new ParrotSon();

// console.log(grandfather.species, father.species, son.species);
// // Parrot Parrot Parrot - все попугаи!
// console.log(grandfather.paws, father.paws, son.paws);
// // 2 2 2 - у каждого по 2 лапы

// // Дед меняет количество лап
// ParrotGrandfather.prototype.paws++;
// console.log(grandfather.paws, father.paws, son.paws);
// // 3 3 3 - у каждого теперь по 3 лапы

// // Отец меняет вид
// ParrotFather.prototype.species = 'eagle';
// console.log(grandfather.species, father.species, son.species);
// // Parrot eagle eagle - дед остался попугаем, отец и сын стали орлами

// // Сын уменьшил количество лап
// ParrotSon.prototype.paws--;
// console.log(grandfather.paws, father.paws, son.paws);
// // 3 3 2 - дед и отец остались при своих трёх лапах

// // Дед решил стать чайкой
// ParrotGrandfather.prototype.species = 'seagull';
// console.log(grandfather.species, father.species, son.species);
// // seagull eagle eagle - дед чайка, отец и сын орлы


// console.dir([].__proto__);
// // То же самое, что и
// console.dir(Array.prototype);

// class objMaker{
// 	constructor(){}
// 	sayHi(){
// 		console.log('hi');
// 	}
// }
// objMaker.prototype.sayBye = function(){
// 	console.log('bye');
// };
// const newObj = new objMaker('John');
// newObj.sayBye();


// let obj = {
// 	name: 'ivan'
// };
// function getName(){
// 	console.log(this.name);
// }
//привязка контекста с самописной bind
// function bind(func, context){
// 	return function(){
// 		return func.call(context);
// 	};
// }
// let getUserName = bind(getName, obj);

//привязка контекста с готовой bind
// let getUserName = getName.bind(obj);

class Person {
  constructor(name) {
    this.name = name;
  }
}

// Всё работает хорошо
class GreatPerson extends Person {
  constructor(name, phrase) {
    // Необходимо вызвать super
    super(name);
    this.phrase = phrase;
  }
}

// А тут ошибка
// class GreatPerson extends Person {
//   constructor(name, phrase) {
//     // Необходимо вызвать super до записи собственных свойств
//     this.phrase = phrase;
//     super(name);
//   }
// }
const greatPerson = new GreatPerson('John', 'money');
console.log(greatPerson);