

const imgaegWrap = document.querySelector('.images');
let index = 0;

setInterval(() => {
  index = (index + 1) % 4;
  imgaegWrap.dataset.image = index;
}, 5000);
