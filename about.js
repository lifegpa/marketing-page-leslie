//GSAP animations


const greatImg = $('.greatImg');
const img = $('img');
const logo = $(".logo")
TweenMax.from(greatImg, 2, {left:600});
tl = new TimelineLite();

TweenMax.from(img, 1, {
    x:-200,
    ease:Power1.easeInOut,
    onStart: onStart,
    onComplete: onComplete,
});
TweenMax.to(logo, 2, {x:document.querySelector("#about").getBoundingClientRect().left+40, backgroundColor:"black"});


function onStart(){
    console.log("animation started");
}

function onComplete(){
    console.log("animation completed");
}



