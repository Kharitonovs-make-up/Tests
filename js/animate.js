// let box = document.getElementById('box');
// function boxAnimation(){
//   let thing = box.querySelector('.box-thing'),
//       pos = 0,
//       id;
//   id = setInterval(frame, 20);
//   function frame(){
//     if(pos >= 300){
//       clearInterval(id);
//     } else{
//       pos++;
//       thing.style.top = pos + 'px';
//       thing.style.left = pos + 'px';
//     }
//   }
// }
// let boxAnimate = document.querySelector('#boxAnimate');
// boxAnimate.addEventListener('click', boxAnimation);

// let prev = performance.now();
// let times = 0;

// requestAnimationFrame(function measure(time) {
//   document.body.insertAdjacentHTML("beforeEnd", Math.floor(time - prev) + " ");
//   prev = time;

//   if (times++ < 4) {requestAnimationFrame(measure);}
// });

// let boxThing = document.querySelector(".box-thing");
// boxThing.addEventListener("click", ()=>{
//   if(boxThing.style.background == "blue"){
//     boxThing.style.background = "green";
//   } else {
//     boxThing.style.background = "blue";
//   }
// });

// window.addEventListener('load', ()=>{
//   let preloader = document.querySelector('.preloader');
//   preloader.style.display = 'none';
// });

// elem.addEventListener('click', ()=> {
//   animate({
//     duration: 2000,
//     timing: function bounce(timeFraction) {
//       // for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
//       //   if (timeFraction >= (7 - 4 * a) / 11) {
//       //     return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
//       //   }
//       // }
//       for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
//         if (timeFraction >= (7 - 4 * a) / 11) {
//           return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
//         }
//       }
//     },
//     draw: function(progress) {
//       elem.style.width = `${progress * 100}%`;
//     }
//   });
// });


function animate({timing, draw, duration}) {
  let start = performance.now();
  console.log(start);
  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {timeFraction = 1;}
    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);
    draw(progress); // отрисовать её
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

let elem = document.getElementById('elem');
let brick = document.getElementById('brick');

function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
}
function bounce(timeFraction) {
  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
    }
  }
}
let bounceEaseOut = makeEaseOut(bounce);
brick.onclick = function() {
  animate({
    duration: 3000,
    timing: bounceEaseOut,
    draw: function(progress) {
      brick.style.left = progress * 500 + 'px';
    }
  });
};
function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
}

let field = document.getElementById('field'),
    ball = document.getElementById('ball');
// ball.addEventListener('click', function(){
//   let to = field.clientHeight - ball.clientHeight;
//   let width = 100;

//   animate({
//     duration: 2000,
//     timing: makeEaseOut(bounce),
//     draw(progress){
//       ball.style.top = to * progress + 'px';
//       ball.style.left = to + 'px';
//     }
//   });

//   animate({
//     duration: 2000,
//     timing: makeEaseOut(quad),
//     draw: function(progress) {
//       ball.style.left = width * progress + "px";
//     }
//   });
// });