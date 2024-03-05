function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonElem = document.querySelector('.change-color');
const colorSpanElem = document.querySelector('.color');

buttonElem.addEventListener('click', (e) => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor

  colorSpanElem.textContent = randomColor
})