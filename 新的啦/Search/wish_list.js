let btnLike = document.querySelectorAll('.like-btn')
let lightboxWish = document.querySelector('.wishlist')
let lightboxAdd = document.querySelector('.new-wishlist')
let btnClose = document.querySelectorAll('.btn-close')
let clickAdd = document.querySelector('.add-new-list')
let listAll = document.querySelectorAll('.per-wishlist')

btnLike.forEach(btn => {
  btn.addEventListener('click',function(){
    $('.wishlist').show()
  }) 
})

listAll.forEach(list => {
  list.addEventListener('click', () => {
    // AddToWishlist()
    $('.lightbox').hide()
  })
})

lightboxWish.onclick = event => {
  if ($(event.target).has('.lightbox-container').length) {
    $('.lightbox').hide()
  }
}
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
  $('.lightbox').hide()
})
