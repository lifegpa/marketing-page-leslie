//GSAP animations


TweenMax.to(".logo", 2, {x:document.querySelector("#about").getBoundingClientRect().left+40, backgroundColor:"black"});

const great = document.querySelector(".greatImg");
TweenMax.from(great, 2, {left:600});