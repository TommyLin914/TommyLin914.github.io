let overlayGroup = document.querySelectorAll('.lightbox')

function openSearchBar() {
  $('.search-bar-container').removeClass('before')
  if (window.innerWidth <= 768) {
    $('.md-btn-container').hide()
    $('.search-bar-floatbox.loc').show()
  }
  document.body.style.overflow = 'hidden'
}
function searchLoc() {
  $('.search-bar-floatbox').hide()
  $('.search-bar-floatbox.loc').show()
}
function searchDate() {
  $('.search-bar-floatbox').hide()
  $('.search-bar-floatbox.calendar').show()
}
function searchTraveler() {
  $('.search-bar-floatbox').hide()
  $('.search-bar-floatbox.traveler').show()
}
overlayGroup.forEach(function (overlay) {
  overlay.onclick = e => {
    if ($(e.target).has('.lightbox-container').length) {
      $('.lightbox').hide()
    }
    if ($(e.target).has('.area').length) {
      $('.search-bar-container').addClass('before')
      $('.lightbox').hide()
      if (window.innerWidth <= 768) {
        $('.md-btn-container').show()
      }
    }
    document.body.style.overflow = 'overlay'
  }
})
