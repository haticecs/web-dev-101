let runningTotal = 0
let buffer = '0'
let previousOp = null

const screenText = document.querySelector('.screen-text')

//event delegation
document
  .querySelector('.button-container')
  .addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      buttonHandler(event.target.innerText)
    }
  })

const buttonHandler = (value) => {
  if (isNaN(parseInt(value))) {
    handleSymbol(value)
  } else {
    handleNumber(value)
  }
  reRender()
  /* console.log(
    'runningTotal ' +
      runningTotal +
      ' buffer ' +
      buffer +
      ' prevOp ' +
      previousOp
  ) */
}

const handleNumber = (value) => {
  if (buffer === '0') {
    buffer = value
  } else {
    buffer += value
  }
}

const handleSymbol = (value) => {
  switch (value) {
    case 'C':
      runningTotal = 0
      buffer = '0'
      previousOp = null
      break
    case '=':
      if (previousOp === null) {
        return
      }
      makeCalculation(parseInt(buffer))
      buffer = '' + runningTotal
      runningTotal = 0
      previousOp === null
      break
    case '←':
      if (buffer.length === 1) {
        buffer = '0'
      } else {
        buffer = buffer.substring(0, buffer.length - 1)
      }
      break
    default:
      handleMathSymbol(value)
      break
  }
}
const handleMathSymbol = (value) => {
  const intBuffer = parseInt(buffer)
  if (runningTotal === 0) {
    runningTotal = intBuffer
  } else {
    makeCalculation(intBuffer)
  }
  buffer = '0'
  previousOp = value
}
const makeCalculation = (intBuffer) => {
  if (previousOp === '+') {
    runningTotal += intBuffer
  } else if (previousOp === '-') {
    runningTotal -= intBuffer
  } else if (previousOp === '×') {
    runningTotal *= intBuffer
  } else {
    runningTotal /= intBuffer
  }
}

const reRender = () => {
  screenText.innerText = buffer
}
