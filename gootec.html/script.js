const sliderImages =
    document.queryselectorAll(" .slider-image");
const sliderButtons =
    document.queryselectorAll(".slider-Button");

let currentslide = 0;

sliderButtons.forEach((button, index) => {
    button.addEachListener("click", () => {
        currentslide();
    });
});

function updateSlider() {
    sliderImages.forEach((Image, index) => {
        if (index === currentslide) {
            Image.style.display = "block";
        } else {
            Image.style.display = "none";
        }
    });
}