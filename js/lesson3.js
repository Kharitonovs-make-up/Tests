// let a = document.getElementById('text');
// let arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресение'];
// let day = prompt('Какой текущий день?');

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] == 'воскресение' || arr[i] == 'суббота'){
//         document.write("<b>", arr[i], "</b>", "<br>");
//     } else if(arr[i] == day) {
//         document.write("<i>", arr[i], "</i>", "<br>");
//     }
//     else {
//         document.write(arr[i], "<br>");
//     }
// }
// let numbers = ['3342343', '4234266', '6546542', '7334321', '8483546'];
// for(let i=0; i<numbers.length; i++) {
//     //let a = numbers[i];
//     if(numbers[i].startsWith('3') || numbers[i].startsWith('7')){
//         console.log(numbers[i]);
//     }
//     // for(let j=0; j<1;j++){
//     //     if(a[j].includes('7') || (a[j].includes('3'))) {
//     //         console.log(numbers[i]);
//     //     }
//     // }
// }
// let str = 'урок-3-был слишком легким';
// str = str[0].toUpperCase() + str.substring(1);
// for(let i=0; i<str.length; i++) {
//     if(str[i] == '-'){
//         str = str.substring(0, i) + ' ' + str.substring(i+1);
//     }
// }
// console.log(str);
// let neckline = "легким";
// console.log(str.lastIndexOf(neckline));
// if(~str.indexOf(neckline)) {
//     str = str.substring(0, str.indexOf(neckline)) + str.substring(str.indexOf(neckline) + neckline.length);
// }
// if(str[str.length-1] == ' '){
//     str = str.slice(0, -1);
// }
// str = str.slice(0, -2) + 'оо';
// console.log(str);
// let arr = [20, 33, 1, "Человек", 2, 3];
// //console.log('parseFloat(arr[i]): ', parseFloat(arr[3]));
// let sum = 0;
// for(let i=0; i<arr.length; i++) {
//     if((!isNaN(parseFloat(arr[i])) && isFinite(arr[i]))){
//         sum += Math.pow(arr[i], 3);
//         console.log(sum);
//     }
// }
// console.log(Math.sqrt(sum));

/* Variadic function -- Returns the greatest common divisor of a list of arguments */
// Math.gcd = function() {
//     if (arguments.length == 2) {
//         if (arguments[1] == 0)
//             return arguments[0];
//         else
//             return Math.gcd(arguments[1], arguments[0] % arguments[1]);
//     } else if (arguments.length > 2) {
//         var result = Math.gcd(arguments[0], arguments[1]);
//         for (var i = 2; i < arguments.length; i++)
//             result = Math.gcd(result, arguments[i]);
//         return result;
//     }
// };
// Попробуйте:

//console.log(Math.gcd(20, 30, 15, 70, 40)); // `5`
function getSums(arr){
    let arr2 = [];
    if (!arr.length) {return arr2;}
    arr.reduce(function(previousValue, currentItem){
        arr2.push(previousValue + currentItem);
        return previousValue + currentItem;
    },0);
    return arr2;
}
const arr = [ 1, 2, 3, 4, 6 ];
//const arr = [];
console.log('getSums( arr ): ', getSums( arr ));

var arrLength = arr.map(function(item) {
    return item.length;
});

let fieldset = document.querySelector('.fieldset');
fieldset.removeAttribute('disabled');
let textarea = document.getElementsByTagName('textarea')[0];
//textarea.removeAttribute('disabled');
textarea.style.margin = "10px";
textarea.textContent=getSums( arr );

//кроссбраузерное получение стилей элементов(функция)
// var elem = document.body;

// function getStyle(elem) {
//   return window.getComputedStyle ? getComputedStyle(elem, "") : elem.currentStyle;
// }

// var marginTop = getStyle(elem).marginTop;
// alert( marginTop ); // IE8-: 10%, иначе пиксели