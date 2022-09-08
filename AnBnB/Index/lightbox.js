let btnLike = document.querySelectorAll('.like-btn')
let overlayGroup = document.querySelectorAll('.lightbox')

let lightboxAdd = document.querySelector('.new-wishlist')
let btnClose = document.querySelectorAll('.btn-close')
let clickAdd = document.querySelector('.add-new-list')
let listAll = document.querySelectorAll('.per-wishlist')
const aaa = document.querySelector('.card-container')
btnLike.forEach(btn => {
  btn.addEventListener('click', showWishlist.bind(event))
})
function showWishlist(e) {
  $('.wishlist').show()
  e.stopPropagation()
}
overlayGroup.forEach(overlay => {
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
    e.stopPropagation()
    document.body.style.overflow = 'overlay'
  }
})

listAll.forEach(list => {
  list.addEventListener('click', () => {
    // AddToWishlist()
    $('.lightbox').hide()
  })
})

btnClose.forEach(item => {
  item.onclick = event => {
    $('.lightbox').hide()
  }
})

clickAdd.onclick = () => {
  $('.lightbox').hide()
  $('.new-wishlist').show()
}
// 建立新心願單
const input = document.querySelector('.new-wishlist-input')
const btnCreate = document.querySelector('.btn-create')
input.onkeyup = () => {
  let words = input.value.length
  if (words > 0 && words <= 50) {
    console.log(input.value.length)
    btnCreate.classList.remove('disabled')
  } else {
    btnCreate.classList = 'btn btn-dark btn-create disabled'
  }
}
lightboxAdd.onclick = event => {
  if ($(event.target).has('.lightbox-container').length) {
    $('.lightbox').hide()
  }
}
btnCreate.addEventListener('click', function () {
  // CreateNewWishlist()
  input.value = ''
  $('.lightbox').hide()
})
