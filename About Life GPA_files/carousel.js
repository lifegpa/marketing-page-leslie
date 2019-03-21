class Slide {
    constructor(carousel) {
        this.carousel = carousel;
        this.slideNumber = 0;
        this.carouselImages = (document.querySelectorAll(`.carouselImg[data-slide]`));
        console.log(this.carouselImages);
        this.currentSlide = this.carousel.querySelectorAll(`.slide[data-slide]`);
        console.log(this.currentSlide);
        this.previousBtn = carousel.querySelector(".previous");
        this.nextBtn = carousel.querySelector(".next");
        this.previousBtn.addEventListener("click", () => this.previousSlide());
        this.nextBtn.addEventListener("click", () => this.nextSlide());
    }
    nextSlide = () => {
        this.carouselImages[this.slideNumber].style.display = "none";
        this.currentSlide[this.slideNumber].style.display = "none";
        this.slideNumber++;
        if (this.slideNumber > 4) {
            this.slideNumber = 0;
        }
        this.carouselImages[this.slideNumber].style.display = "block";
        this.currentSlide[this.slideNumber].style.display = "block";

       
    }
    previousSlide = () => {
        this.carouselImages[this.slideNumber].style.display = "none";
        this.currentSlide[this.slideNumber].style.display = "none";
        this.slideNumber--;
        if (this.slideNumber < 0) {
            this.slideNumber = 4;
        }
        this.carouselImages[this.slideNumber].style.display = "block";
         this.currentSlide[this.slideNumber].style.display = "block";


    }
}

    const slides = document.querySelectorAll(".carousel");

    console.log(slides);

    slides.forEach(function (slide) {
        return new Slide(slide);
    });
