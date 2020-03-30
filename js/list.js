//херня способ
// function fib(n){
//   return (n > 1) ? fib(n - 1) + fib(n - 2) : n;
// }

//норм
// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// console.log(fib(7));

//function printList(list){
  //вывод через цикл
  // let tmp = list;
  // while(tmp){
  //   console.log(tmp.value);
  //   tmp = tmp.next;
  // }

  //вывод через рекурсию
//   console.log(list.value);
//   if(list.next){
//     printList(list.next);
//   }
// }

function printReverseList(list){
  // if(list.next){
  //   printReverseList(list.next);
  // }
  // console.log(list.value);

  let arr = [];
  let tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log( arr[i] );
  }
}

let list = {value:1};
list.next = {value:2};
list.next.next = {value:3};
list.next.next.next = {value:4};
console.log(list);
printReverseList(list);