//Создать класс options
//Он должен содержать свойства: height, width, bg, fontSize, textAlign
//Он должен содержать метод, создающий новый div на странице, записывающий в него
//любой текст и при помощи cssText изменять свой стиль из переданных параметров
//Создать новый объект через класс
//Вызвать его метод и получить элемент на странице

// class options{
//   constructor(height = 200, width = 200, bg = 'blue', fontSize = 14, textAlign = 'center'){
//     this.height = height;
//     this.width = width;
//     this.bg = bg;
//     this.fontSize = fontSize;
//     this.textAlign = textAlign;
//   }
//   newDiv(text){
//     const div = document.createElement('div');
//     const style = `height:${this.height}px; width:${this.width}px; background:${this.bg};
//      font-size:${this.fontSize}; text-align:${this.textAlign};`;
//     console.log(style);
//     div.style.cssText = style;
//     div.textContent = text;
//     document.body.appendChild(div);
//   }
// }
// //options.newDiv('new Element', 'width: 200px; height: 200px; background: blue;');
// const square = new options(400, 400, 'red', 16);
// square.newDiv('new Div very good');

// const form = document.forms[1];
// console.dir(form);
//console.dir(EventTarget);

// const input = document.querySelector('#input');
// let attributes = input.attributes;
// console.log(attributes.getNamedItem('something'));
// console.dir(attributes);
// console.dir(input);

// let div = document.createElement('div');
// div.textContent = 'new div!';
// div.insertAdjacentHTML("afterbegin", `<ul>
// <li>1</li>
// <li>2</li>
// </ul>`);
// document.body.append(div);

// let elem = document.getElementById('elem');

// function clear(poorElem){
//   while(poorElem.firstChild){
//     poorElem.firstChild.remove();
//   }
// }
// clear(elem);

// let container = document.getElementById('container');

// //через innerHTML + рекурсия
// function createTree(container, obj) {
//   container.innerHTML = createTreeText(obj);
// }
// function createTreeText(obj) { // отдельная рекурсивная функция
//   let li = '';
//   let ul;
//   if(true){
//     console.dir(obj);
//   }
//   for (let key in obj) {
//     li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//   }
//   if (li) {
//     ul = '<ul>' + li + '</ul>';
//   }
//   return ul || '';
// }
// // createTree(container, data);


let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  },
  *[Symbol.iterator](){
    for(let key in this){
      yield this[key];
    }
  }
};
for(let key of data){
  console.log(key);
}
//через методы DOM
// function createTree(container, obj) {
//   if(!Object.keys(obj).length){return;}
//   container.append(createTreeDom(obj));
// }

// function createTreeDom(obj) {
//   // если нет дочерних элементов, то вызов возвращает undefined
//   // и элемент <ul> не будет создан
//   if (!Object.keys(obj).length) {return;}

//   let ul = document.createElement('ul');

//   for (let key in obj) {
//     let li = document.createElement('li');
//     li.textContent = key;

//     let childrenUl = createTreeDom(obj[key]);
//     if (childrenUl) {
//       li.append(childrenUl);
//     }

//     ul.append(li);
//   }
//   return ul;
// }

// createTree(container, data);
// // const supportsDOM2Core = document.implementation.hasFeature("Views", "2.0");
// // const implementation = document.implementation;
// // console.dir(supportsDOM2Core);
// console.log(document.doctype.systemId);
// let tagName = document.getElementById('hi').parentNode.parentNode.tagName;
// console.log(tagName);
// let script = document.querySelector('.script');
// console.log(script.textContent);

// const elem = document.getElementById('elem');
// console.log(elem.attributes[0]);
// const table = document.querySelector('table');
// console.log(parseInt(getComputedStyle(table).width));
// console.dir(getComputedStyle);

// const arr = [1, 2, 3, 4];
// for(let elem of arr){
//   console.log('Key:' + elem);
// }
// function *createIterator(data){
//   for(let key in data){
//     yield {key, d: data[key]};
//   }
// }
// let iterator = createIterator(data);

// for(let elem of iterator){
//   console.log(elem);
// }

let map = new Map();
map.set('a', 33);
let b = 'ddd';
map
  .set(1, b)
  .set('c', 'c');

//let iterator = map.keys();
//console.log(iterator);
// for(let [key, value] of map){
//   console.log(`key: ${key}, value: ${value}`);
// }
let set = new Set();
set.add('dd')
    .add(3)
    .add(4);
// for(let elem of set){
//   console.log(elem);
// }
console.log(map.has('a'));
const obj = Object.fromEntries(map);
obj.null = 'dd';
console.log(obj);
set.forEach((value)=>{
  console.log(value);
});