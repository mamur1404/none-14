let cloud = document.querySelectorAll('.cloud');
let boat = document.querySelector('.boat');

window.addEventListener('scroll', () => {
    
    // console.log(this.scrollY);
    let windowY = this.scrollY;
    
    const speedBoat = boat.getAttribute('data-speed');
    boat.style.transform = `translateX(${windowY / 10 * speedBoat}px)`;
    
    
    cloud.forEach(clouds => {    
        const speed = clouds.getAttribute('data-speed');
        clouds.style.transform = `translateX(${windowY / 10 * speed}px)`;
    });
})

let h1 = document.querySelector('.header__title');

let txt = h1.innerHTML;
h1.innerHTML = '';
// parallax effect
function str(x = 0) {
    h1.innerHTML += txt[x];
    x++;
    
    if (x < txt.length) {
        setTimeout(() => {
            str(x);
        }, 250);
    }
}
str();

let h2 = document.querySelector('.parallax__title');

let text = h2.innerHTML;
h2.innerHTML = '';

function none(h = 0) {
    h2.innerHTML += text[h];
    h++;
    
    if (h < text.length) {
        setTimeout(() => {
            none(h);
        }, 250);
    }
    
}
none();

let box = document.querySelector('.parallax__box');
let ball = box.querySelectorAll('.parallax__ball');

box.addEventListener('mousemove', (e) => {
   
    // console.log(e.pageX);
    
    ball.forEach(balls => {
        
        const speed = balls.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100
        
        balls.style.transform = `translate(${x}px, ${y}px)`;
    });
});

let timerNum = document.querySelectorAll('.timer__num');
let timer = document.querySelector('.timer');

// console.log(timer.getBoundingClientRect().top);
// console.log(timer.offsetTop); /* 1938 */
// console.log(timer.offsetHeight); /* 350 */
// console.log(timer.offsetTop - timer.offsetHeight * 2); /* 350 */
// 1938 - 350 * 2 = 1238

window.addEventListener("scroll", function srcollCount() {
    
    // console.log(pageYOffset); /* 1319 */
    
    if (pageYOffset >= (timer.offsetTop - timer.offsetHeight * 2)) {
        for (let i = 0; i < timerNum.length; i++) {
            
            const count =  +timerNum[i].dataset.num;
            timerNum[i].innerHTML = 0;
            
            function time(k = 0) {
                 timerNum[i].innerHTML = k;
                 k++;
                 if (k <= count) {
                     setTimeout(() => {
                         time(k);
                     }, 50);             
                 }
            }
            time();
            
            // console.log(count);
        };
        this.removeEventListener("scroll", srcollCount);
    }
});

let timerBtn = document.querySelectorAll('.timer__btn');

timerBtn.forEach(timerBtns => {
    timerBtns.addEventListener('mousemove', function (e) {
       
       const x = e.pageX - this.offsetLeft;
       const y = e.pageY - this.offsetTop;
       
       this.style.setProperty("--x",  `${x}px`);
       this.style.setProperty("--y",  `${y}px`);
        
    });
});


let card = document.querySelectorAll('.card');

card.forEach(cards => {
    cards.addEventListener('mousemove', rotate);
    cards.addEventListener('mouseout', rotateNone);
    
});

function rotate(e) {
    
   const item = this.querySelector('.card__item'); 
   const halfHeight = item.offsetHeight / 2;
   item.innerHTML = halfHeight - e.offsetY;
   
   item.style.transform = `rotateX(${(halfHeight - e.offsetY) / 5}deg) rotateY(${-(halfHeight - e.offsetX) / 10}deg)`;
};

function rotateNone() {
    const itemNone = this.querySelector('.card__item');
    itemNone.style.transform = `rotate(0)`; 
}