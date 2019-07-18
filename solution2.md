***HTML**
 <div class="container">
    <img class="img1" src="./assets/alan_kay.jpg">
    <img class="img2" src="./assets/alan_kay.jpg">
</div>

**CSS**
.container{
    position: relative;
}

.one-third{
    position: absolute;
    clip: rect(0px,250px,115px,0px);
    top: 230px;
    left:0px;
}

***JS***
const imgTwoEl= document.querySelector('.img2');


function  copyTopThird(){
    imgTwoEl.classList.add('one-third')
}

copyTopThird();