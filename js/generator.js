function* generateSequence(){
  yield 1;
  yield 2;
  yield 3;
}
let generator = generateSequence();
// console.log(generator);
// let one = generator.next();//первый вызов - 1
// generator.next();//2
// console.log(generator.next());//3, done
for(let value of generator){
  console.log(value);
}
let sequence = [0, ...generateSequence()];
console.log(sequence);