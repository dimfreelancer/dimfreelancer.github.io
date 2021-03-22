'use strict';
/**
 * * Mine Swiper on JS
*/
/* 
const X = 514;
let count = 0;
let i = 0;
while (i<X) {
    console.log(`
.empty-${count++} {
    background-position: -${i}px 0px;
}`);
    // console.log(`-${i}px -> `, count++);
    i += 32; //++32px
} */


const ceils = document.querySelectorAll('.game-cell');

ceils.forEach( (item, i) => {
    item.addEventListener('dblclick', (e) => {
        console.log(e.target);
    });
});


const gameField = document.querySelector('.game-field');

gameField.addEventListener('contextmenu', event => {
    event.preventDefault();
    const target = event.target;

    if (target === gameField) {
        console.log('retunt, it s field');
        return ;
    }
    

    console.log(target);
    console.log(target.classList);

    if (target.classList.contains('bomb')) {
        console.error('The bomb');
        target.classList.remove('bomb');
        target.classList.add('boom');
    }
});

    