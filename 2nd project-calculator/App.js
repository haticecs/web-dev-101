const screenText = document.querySelector('.screen-text')
const buttonContainer = document.querySelector('.button-container')

//event delegation
buttonContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
  }
})
