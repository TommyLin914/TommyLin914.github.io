const btnFilter = document.querySelector('.filter-button')
let overlayFilter = document.querySelector('.filter')

overlayFilter.onclick = event => {
  if ($(event.target).has('.lightbox-container').length) {
    $('.lightbox').hide()
  }
  document.body.style.overflow = 'overlay'
}
btnFilter.onclick = () => {
  $('.filter').show()
  document.body.style.overflow = 'hidden'
  slideOneDisplay()
  slideTwoDisplay()
}

//slider
const sliderOne = document.querySelector('#slider-1')
const sliderTwo = document.querySelector('#slider-2')
const min = document.querySelector('.min-price')
const max = document.querySelector('.max-price')
const track = document.querySelector('.slider-track')
let maxVal = sliderOne.max
let minGap = 0

sliderOne.oninput = slideOneDisplay
sliderTwo.oninput = slideTwoDisplay

function slideOneDisplay() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap
  }
  min.value = sliderOne.value
  fillLine()
}
function slideTwoDisplay() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap
  }
  max.value = sliderTwo.value
  fillLine()
}
function fillLine() {
  let p1 = (sliderOne.value / maxVal) * 100
  let p2 = (sliderTwo.value / maxVal) * 100
  track.style.background = `linear-gradient(to right, #d5d5d5 ${p1}% , #000 ${p1}% , #000 ${p2}%, #d5d5d5 ${p2}%)`
}
