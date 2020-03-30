window.addEventListener("DOMContentLoaded", function(){
  let box = document.querySelector('.box');
  box.addEventListener('touchstart', (event)=>{
    event.preventDefault();
    console.log(event.changedTouches[0].pageX);
  });

  box.addEventListener('touchmove', (event)=>{
    event.preventDefault();
    console.log('move');
  });

  box.addEventListener('touchend', (event)=>{
    event.preventDefault();
    console.log('end');
  });
});
// window.addEventListener("onbeforeunload", ()=> {return true;});
// window.onbeforeunload = function() {
//   return false;
// };