let CAT_URL = 'https://cataas.com/cat?json=true/cute'

const inputText = document.getElementById('user-text')
const inputSize = document.getElementById('user-font')
const inputColor = document.getElementById('user-color')
const button = document.querySelector('.button')

const img = document.createElement('img')
img.src = null
img.alt = ''
img.setAttribute('style', 'visibility: hidden;')

document.querySelector('.container').appendChild(img)

button.addEventListener('click', (event) => {
  clickHandler()
})

const clickHandler = () => {
  promiseHandler()
}

const promiseHandler = () => {
  const promise = fetch(CAT_URL)
  promise
    .then(function (response) {
      const processingPromise = response.json()
      return processingPromise
    })
    .then(function (processedResponse) {
      const imgID = processedResponse.id
      const imgSrc = getImageSource(imgID)
      console.log('here')
      console.log(imgSrc)
      showImage(imgSrc)
      console.log('done')
    })
}

const getImageSource = (imgID) =>
  'https://cataas.com/cat/' +
  imgID +
  '/says/' +
  inputText.value +
  '?size=' +
  inputSize.value +
  '&color=' +
  inputColor.value

const showImage = (imgSrc) => {
  img.src = imgSrc
  img.alt = 'cute cat'
  img.setAttribute(
    'style',
    'visibility: visible;max-width: 600px; max-height: 450px; object-fit:contain'
  )
}
