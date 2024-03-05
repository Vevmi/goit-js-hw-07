function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreateElem = document.querySelector('[data-create]');
const buttondestroyElem = document.querySelector('[data-destroy]');
const inputElem = document.querySelector('input');

const boxesElem = document.querySelector('#boxes');

buttonCreateElem.addEventListener('click', (e) => {
  const userNumber = +inputElem.value
  const min = +inputElem.getAttribute('min')
  const max = +inputElem.getAttribute('max')

  if (userNumber < min || userNumber > max) {
    return
  } 
  const result = createMarkup(userNumber)
  boxesElem.insertAdjacentHTML("beforeend", result)
})

function createMarkup(len) {
  let size = 30;
  let markup = ''
  for (let i = 0; i < len; i++) {
    markup += `<div style="width: ${size}px; height: ${size}px;background-color: ${getRandomHexColor()};"></div>`
    size += 10
  }
  return markup
}


buttondestroyElem.addEventListener('click',() => {
  boxesElem.innerHTML = " "
  inputElem.value = '1'
})