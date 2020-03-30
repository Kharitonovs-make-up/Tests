// function replacer(str, name, surname, offset, s) {
//   return surname + " " + name;
// }

// var str = "Василий Пупкин супер стар";
// let regexp = / /g;
// console.log(str.replace(/(Василий) (Пупкин)/, replacer)); // Пупкин, Василий
// let result = str.match(regexp);

// let str = 'Миссис и мистер Поппинз взяли зонтик и пошли к медведю - мистер Ваня, котоорый любил мед и миссис Поппинз';
// let regexp = /\S{5}?/gi;
// let result = str.match(regexp);
// console.log(result);
// console.dir(result);

//let str2 = " Кот любит кушать котлеты из под котовского мяса. вот этот кот, однако котоед))))";
//let regexp = /кот/gi;
// let result;
// result = resultay.from(str.matchAll(regexp));
// result = regexp.exec(str);
// regexp.exec(str);
// regexp.exec(str);
// regexp.exec(str);
// result = regexp.exec(str);
// console.log(result + ' last index: ' + regexp.lastIndex);

// let str2 = "d sКот любит кушать котлеты из под котовского мяса. вот dэтот кот, однако котоед))))";
// let res = regexp.exec(str2);
// regexp.exec(str2);
// regexp.exec(str2);
// regexp.exec(str2);
// console.log(res + ' last index: ' + regexp.lastIndex);

//так как matchAll не поддерживается некоторыми браузерами, то приходится придумывать свое
// function matchAll(str, regexp) {
//   let result = [];
//   let currentResult = null;
//   while (currentResult = regexp.exec(str)) {
//     result = [...result, currentResult];
//   }
//   return result;
// }

// //console.log(matchAll(str2)[2]);

// let regexp1 = /[a-f\d]{2}(?<separator>[-:])([a-f\d]{2}\k<separator>){4}[a-f\d]{2}/gi;

// let str = `
//   ARP таблица:
//   Физический адрес     IP-адрес
//   03-60-8C-FF-02-02    197.17.13.3
//   00:01:A2:05:03:13    197.17.13.44
//   AA-00-04:6A-92-89    197.17.13.123
//   09-33-02-09-90-90    197.17.13.4
//   08:8B:23:AA:91:81    197.17.13.62
//   `;

//   //console.log(str.match(regexp));
// //console.log(matchAll(str, regexp1));
// let result = str.replace(regexp1, (match, p1,p2, offset, input, groups)=>{
//   console.log('совпадение match: ' + match);
//   console.log('первая скобочная группа: ' + p1);
//   console.log('позиция с найденным совпадением: ' + offset);
//   console.log(`исходное выражение: ${input}`);
//   for(let group in groups){
//     console.log(group);
//   }
//   return `${p1}`;
// });
// console.log(result);

//let result = str.replace(regexp, '$\''); вставляем подстроку после найденного
// $` - вставляет подстроку до найденного в найденное
//let result = str.replace(/(Василий) (Пупкин)/, '$2 $1');//меняет местами найденное
//let result = str.replace(/(Василий) (Пупкин)/, 'Известный $&');
//let result = str.replace(regexp, 'd');
//console.log(result);

// // вывести и заменить все совпадения
// function replacer(str, offset, s) {
//   console.log( "Найдено: " + str + " на позиции: " + offset + " в строке: " + s );
//   return str.toLowerCase();
// }

// var result = "ОЙ-Ой-ой".replace(/ой/gi, replacer);
// console.log( 'Результат: ' + result ); // Результат: ой-ой-ой


// со скобочным выражением
// function replacer(str, name, surname, offset, s) {
//   return surname + ", " + name;
// }

// var str = "Василий Пупкин";

// console.log(str.replace(/(Василий) (Пупкин)/, replacer)); // Пупкин, Василий


// var str = "Люблю регэкспы я, но странною любовью";

// // эти две проверки идентичны. test - метод класса RegExp
// console.log( /лю/i.test(str) ); // true
// console.log( str.search(/лю/i) != -1 ); // true

// let ddd = /ff/;
// console.log(ddd.lastIndex);

//Если флага g нет, то regexp.exec(str) ищет и возвращает первое совпадение,
//является полным аналогом вызова str.match(reg).

// Но если есть g, то:
// regexp.exec(str) возвращает первое совпадение и запоминает позицию
// после него в свойстве regexp.lastIndex.
// Следующий вызов начинает поиск от regexp.lastIndex и возвращает следующее совпадение.
// Если совпадений больше нет, то regexp.exec возвращает null,
// а для regexp.lastIndex устанавливается значение 0.
// exec - метод класса RegExp

// let str = 'Больше о JavaScript на https://javascript.info';
// let regexp = /javascript/ig;
// let result;

// while ((result = regexp.exec(str)) == true) {
//   console.log( `Найдено ${result[0]} на позиции ${result.index}` );
// }

//преобразуем номер телефона
// let str = "+7(903)-123-45-67";
// let reg = /\d/g;
// console.log( str.match(reg) ); // массив совпадений: 7,9,0,3,1,2,3,4,5,6,7
// console.log( str.match(reg).join('') ); // 79035419441
//более короткий путь
//console.log( str.replace(/\D/g, "") ); // 79031234567


//Если регулярное выражение имеет флаг 'g',
//то regexp.test расширяется свойством regexp.lastIndex, точно так же, какregexp.exec
// let regexp = /люблю/gi;

// let str = "Я люблю JavaScript";

// // начать поиск с 10 позиции:
// regexp.lastIndex = 10;
// console.log( regexp.test(str) ); // false (совпадений нет)

//Одно и то же глобальное регулярное выражение, использованное повторно,
//может иметь другой результат
// let regexp = /javascript/g;  // (regexp только что создан: regexp.lastIndex=0)

// console.log( regexp.test("javascript") ); // true (а теперь regexp.lastIndex=10)
// console.log( regexp.test("javascript") ); // false
//Это именно потому, что во втором тесте regexp.lastIndex не равен нулю.
//Чтобы обойти это, можно использовать неглобальные регулярные выражения
//или переприсвоить regexp.lastIndex = 0 перед новым поиском.

// \b - граница слова. она имеет нулевую ширину. это проверка
// console.log( "Hello, Java!".match(/\bHello\b/) ); // Hello
// console.log( "Hello, Java!".match(/\bJava\b/) );  // Java
// console.log( "Hello, Java!".match(/\bHell\b/) );  // null (нет совпадения)
// console.log( "Hello, Java!".match(/\bJava!\b/) ); // null (нет совпадения)
// console.log( "1 23 456 78".match(/\b\d\d\b/g) ); // 23,78
//Граница слова не работает для алфавитов, не основанных на латинице.
// \b проверяет границу между \w и чем-то ещё
// for(let i=0; i<'𝒳𝒴'.length; i++) {
//   console.log('𝒳𝒴'.charCodeAt(i)); // 55349, 56499, 55349, 56500
// }

// let str = "Завтрак в 09:00 в комнате 123:456";
// let regexp = /\b\d\d:\d\d\b/g;
// console.log(str.match(regexp));

// let str = "ЗЗавтрак в 39:00 в комнате 123:456к в 23:59.";
// var reg = /(\b[01]\d|2[0-3]):[0-5]\d\b/g;
// console.log(str.match(reg));

// let str ="Завтрак в 09:00. Ужин в 21-30";
// let reg = /(([0-1]\d[:-][0-5]\d)|(2[0-3][:-][0-5]\d)|(24[:-]00))(?![\d\w])/g;
// console.log(str.match(reg));

//Квантификация (поиск последовательностей)
//квантификатор определяет повторяемость
//жадный квантификатор определяет максимально возможную подстроку
//ленивый квантификатор определяет минимально возможную подстроку

// let reg = /\.{3,}/g;
// console.log( "Привет!... Как дела?.....".match(reg) );

// let reg = /#[a-f0-9]{6}\b/gi;
// let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
// console.log(str.match(reg));

// var str = "Я люблю JavaScript!";
// var N = 3;
// let reg = new RegExp("[а-яё]{1,"+N+"}");
// console.log( str.match("[а-яё]{1,"+N+"}"));

// let reg = /"[^"]+"/g;
// let str = 'a "witch" and her "broom" is one';
// console.log( str.match(reg) ); // witch, broom
// 
// let reg = /<!--[\s\S]*?-->/g;
// let str = `... <!-- My -- comment
//  test --> ..  <!--gg--> ..
// `;
// console.log( str.match(reg) );

// let regexp = /<!--[\s\S]*?-->/g;

// let str = `... <!-- My -- comment
//  test --> ..  <!----> ..
// `;

// console.log( str.match(regexp) ); // '<!-- My -- comment \n test -->', '<!---->'

// let regexp = /<[^<>]+>/g;

// let str = '<> <a href="/"> <input type="radio" checked> <b>';

// console.log( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>', '<b>'
// let str = '<h1>Hello, world!<h2>';

// function matchAll(str, regexp){
//   let result = [];
//   let currentElem = null;
//   while(currentElem = regexp.exec(str)){
//     result = [...result, currentElem];
//     console.log('last index:' + regexp.lastIndex);
//   }
//   console.log(typeof regexp);
//   console.log(regexp);
//   return result;
// }

// let dateRegexp = /([0-9]{4})-([0-9]{2})-([0-9]{2})/g;

// let str = "2019-10-30 2020-01-01 2021-22-33";
// let groupResults=[];
// let m;
// while (m=dateRegexp.exec(str)) {
//   groupResults = [...groupResults, m[1],m[2],m[3]];
// }
// console.log(groupResults);

// let results = str.matchAll(dateRegexp);
// let i = 0;

// for(let result of results) {
//   let [year, month, day] = [groupResults[i], groupResults[i+1], groupResults[i+2]];
//   //let {year, month, day} = groupResults;
//   i+=3;

//   console.log(`${day}.${month}.${year}`);

//   // первый вывод: 30.10.2019
//   // второй: 01.01.2020
// }

// let str2 = "2039-10-30 2020-01-01 2021-22-33";
// console.log(dateRegexp.exec(str2));

// let tag = matchAll(str, /<[^f](.*?)>/g);

// console.log(tag);
// console.log(typeof tag[0] ); // <h1>
// console.log( tag[1] );
// console.log(typeof tag.input); // h1

// let str = '<span \nclass="my"z>sss';

// let regexp = /<(([a-z]+)\s*([^>]*))>/;

// let result = str.match(regexp);
// console.log(result.input);
// console.log(result[0]); // <span class="my">
// console.log(result[1]); // span class="my"
// console.log(result[2] + result[3]); // span

// let results = '<h1> <h2> <b> <h3></h3></b>';
// const regexp = /<(.*?)>/gi;
// let i = 0;
// let elem;
// // results - не массив, а перебираемый объект
// for(let result of results.matchAll(regexp)){
//   console.log(result);
//   i++;
//   elem = result;
//   if(i>=3){
//     break;
//   }
// }
// console.log(elem);

// results = Array.from(results); // превращаем в массив

// console.log(results[0]); // <h1>,h1 (первый тег)
// console.log(results[1]); // <h2>,h2 (второй тег)

// let regexp = /\[(b|quote|url)\][\n\S]*?\[\/\1\]/i;

// let str = "..[url][b]http://ya.ru[/b][/url]..";
// console.log( str.match(regexp) ); // [url][b]http://ya.ru[/b][/url]

// let str = "1 индейка стоит 30€";

// console.log( str.match(/\d+(?=€)/) ); // 30, число 1 проигнорировано, так как за ним НЕ следует €

// let regexp = /(?<![-\d])\d+/g;

// let str = "0 12 -5 123 -18";

// console.log( str.match(regexp) ); // 0, 12, 123

// let regexp = /<body.*?>/;

// let str = `
// <html>
//   <body style="height: 200px">
//   ...
//   </body>
// </html>
// `;

// // str = str.replace(regexp, (match, offset, input)=>{
// //   return`${match}<h1>Hello</h1>`;
// //   //let str2 = input.slice(offset+match.length);input.slice(0, offset)+input.slice(offset+match.length)
// //   // console.log(match);
// //   // console.log(str1);
// //   // console.log(str2);
// //   //return str;
// // });
// str = str.replace(regexp, `$& <h1>Hello</h1>`);
// console.log(str);

// let str = "Я люблю JavaScript";
// console.log(str.search(/Java(Script)?/i)!=-1);

function checkCreditCard(str) {
  let regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkCreditCard("378282246310006"));

console.log(checkCreditCard("37828224630006"));