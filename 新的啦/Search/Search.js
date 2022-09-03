const containerProducts = document.querySelector('.container-set')
const btnHide = document.querySelector('.btn-hide-products')
const secMap = document.querySelector('.map-section')

btnHide.onclick = () => {
  btnHide.classList.toggle('close')
  containerProducts.classList.toggle('close')
  secMap.classList.toggle('full-width')

  setTimeout(function(){map.invalidateSize()},500)
}
