const cube = document.querySelector('.cube');
const scene = document.querySelector('.scene');

const body = document.querySelector('body');

const buttonFront = document.querySelector('.buttonContainer__rotate-front');
const buttonRight = document.querySelector('.buttonContainer__rotate-right');
const buttonBack = document.querySelector('.buttonContainer__rotate-back');
const buttonLeft = document.querySelector('.buttonContainer__rotate-left');
const buttonTop = document.querySelector('.buttonContainer__rotate-top');
const buttonBottom = document.querySelector('.buttonContainer__rotate-bottom');


let valueX = 0;
let valueY = 0;



let startingX , startingY , movingX , movingY ;
function touchStart(evt){
startingX = evt.touches[0].clientX ;
startingY = evt.touches[0].clientY ;
}
function touchMove(evt){
movingX = evt.touches[0].clientX ;
movingY = evt.touches[0].clientY ;
}
function touchEnd(){



if(startingX+50 < movingX){
  valueY = valueY + 0.25;
  console.log('right');
  cube.style.transform = `translateZ(-180px) rotateY(${valueY}turn)`;
} else if(startingX-50 > movingX){
  valueY = valueY - 0.25;
  console.log('left');
  cube.style.transform = `translateZ(-180px) rotateY(${valueY}turn)`;
}

 if(startingY+50 < movingY){
   valueX = valueX - 0.25;
  cube.style.transform = `translateZ(-180px) rotateX(${valueX}turn)`;
  console.log('down');
} else if(startingY-50 > movingY){
  valueX = valueX + 0.25;
  console.log('up');
  cube.style.transform = `translateZ(-180px) rotateX(${valueX}turn)`;
}
}

body.addEventListener('touchstart', touchStart);
body.addEventListener('touchmove', touchMove);
body.addEventListener('touchend', touchEnd);


const clearEveryClass = () =>{
        if(cube.classList.contains('show-front') || cube.classList.contains('show-right') || cube.classList.contains('show-back') || cube.classList.contains('show-left') || cube.classList.contains('show-top') || cube.classList.contains('show-bottom') ){
            cube.classList.remove('show-front');
            cube.classList.remove('show-right');
            cube.classList.remove('show-back');
            cube.classList.remove('show-left');
            cube.classList.remove('show-top');
            cube.classList.remove('show-bottom');
        }
}


// buttonFront.addEventListener('click', ()=>{
//   clearEveryClass();
//   cube.classList.add('show-front');
// })
// buttonRight.addEventListener('click', ()=>{
//     clearEveryClass();
//     cube.classList.add('show-right');
//   })
//   buttonBack.addEventListener('click', ()=>{
//     clearEveryClass();
//     cube.classList.add('show-back');
//   })
//   buttonLeft.addEventListener('click', ()=>{
//     clearEveryClass();
//     cube.classList.add('show-left');
//   })
//   buttonTop.addEventListener('click', ()=>{
//     clearEveryClass();
//     cube.classList.add('show-top');
//   })
//   buttonBottom.addEventListener('click', ()=>{
//     clearEveryClass();
//     cube.classList.add('show-bottom');
//   })