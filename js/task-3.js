const inputElem = document.querySelector('#name-input')
const outputElem = document.querySelector('#name-output')

inputElem.addEventListener('input', (e) => {
    outputElem.textContent = inputElem.value.trim() || 'Anonymous';
})