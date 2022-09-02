const btnFilter = document.querySelector('.filter-button')
let overlayFilter = document.querySelector('.filter')

overlayFilter.onclick = event => {
  if ($(event.target).has('.lightbox-container').length) {
    $('.lightbox').hide()
  }
}
btnFilter.onclick = ()=> {
  $('.filter').show()
}
