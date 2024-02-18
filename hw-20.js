let randomNum = Math.floor(Math.random() * 9) + 1;
let img = `img/${randomNum}.jpg`;

let image = document.querySelector('#myImg');
image.src = img;
image.style.width = "200px";