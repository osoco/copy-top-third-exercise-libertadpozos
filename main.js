'use strict';

const imgOneEl= document.querySelector('.img1');
const imgTwoEl= document.querySelector('.img2');

function  copyTopThird(){
    imgOneEl.classList.add('two-thirds');
    imgTwoEl.classList.add('one-third')
}

copyTopThird();