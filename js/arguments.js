// function test(){
//   //arguments[1] = 'new';
//   console.log(arguments);
// }
// console.dir(test(3,'dd', {name: 'valera', age: 14}));
// //console.dir(test);

// function pow(x, n){
//   return (n==1) ? x : x*pow(x, n-1);
// }
// console.log('pow(9, 3): ', pow(9, 3));

function b(y){
  console.log('b');
  y();
}
function a(a, b){
  console.log('a+b: ',a+b);
}
b(function(){
  a(4,6);
});