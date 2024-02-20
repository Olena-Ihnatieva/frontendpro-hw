const imagesArr = [
    'img/1.jpg', 'img/2.jpg', 'img/3.jpg',
    'img/4.jpg', 'img/5.jpg', 'img/6.jpg',
    'img/7.jpg', 'img/8.jpg', 'img/9.jpg'
];
const images = document.querySelector('#sliderImg');
let imageIndex = 0;

const slider = document.querySelector('#slider');
const prev = document.querySelector('#prevBtn');
const next = document.querySelector('#nextBtn');

slider.style.display = "flex";
slider.style.alignItems = "center";

images.style.width = "200px";
images.style.height = "280px";

function changeImage() {
    images.src = imagesArr[imageIndex];
    prev.style.visibility = imageIndex === 0 ? 'hidden' : 'visible';
    next.style.visibility = imageIndex === imagesArr.length - 1 ? 'hidden' : 'visible';
}

prev.addEventListener('click', () => {
    if (imageIndex > 0) {
        imageIndex--;
        changeImage();
    }
});

next.addEventListener('click', () => {
    if (imageIndex < imagesArr.length - 1) {
        imageIndex++;
        changeImage();
    }
});

changeImage();