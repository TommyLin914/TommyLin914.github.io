function toggleMenu() {
  console.log(111)
  document.querySelectorAll('.toggle-menu').forEach(e => {
    e.classList.toggle('toggle-menu-active')
  })
}
function openSearchBar() {
  $('.search-bar-container').removeClass('before')
  if(window.innerWidth<=768){
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
