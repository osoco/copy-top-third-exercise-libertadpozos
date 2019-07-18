***HTML***
 <div class="container">
    <img class="img1" src="./assets/alan_kay.jpg">
    <img class="img2" src="./assets/alan_kay.jpg">
</div>

***CSS**
.container{
    width:250px;
    height: 345px;
    position: relative;
}

.two-thirds{
    position: absolute;
    clip: rect(0px,250px,230px,0px);;
    z-index:2;
   
}
.one-third{
    position: absolute;
    clip: rect(0px,250px,115px,0px);
    top: 230px;
}

***JS***
const imgOneEl= document.querySelector('.img1');
const imgTwoEl= document.querySelector('.img2');

function  copyTopThird(){
    imgOneEl.classList.add('two-thirds');
    imgTwoEl.classList.add('one-third')
}

copyTopThird();




