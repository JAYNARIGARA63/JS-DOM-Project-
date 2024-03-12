const Slides = document.querySelectorAll(".slide");
let count = 0;
console.log(Slides);

Slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const prev = () => {
  count--
  if (count < 0) {
    count = 0; 
  }
  slideImage();
};

const next = () => {
    count++
    if (count >= Slides.length ) {
        count = Slides.length - 1;
    }
    slideImage()

}

const slideImage = () => {
  Slides.forEach((slide) => {
    slide.style.transform = `translate(-${count * 100}%)`;
  });
};
