let listName = document.querySelector('.wishlist-name').innerText
$('.btn-set-wishlist').click(function () {
  $('.set-wishlist').show()
})
$('.cancel-change').click(closeLightBox)
$('.btn-save').click(() => {
  closeLightBox()
//   saveChange()
})

function closeLightBox() {
  $('.set-wishlist').hide()
}
