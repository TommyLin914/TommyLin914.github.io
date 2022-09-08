let lat = 25
let lng = 121.5
let zoom = 8
var map = L.map('map').setView([lat, lng], zoom)
let markers = L.markerClusterGroup()

const secMap = document.querySelector('.map-section')
$('.btn-map').click(function () {
  secMap.classList.toggle('show')
  if (secMap.classList.contains('show')) {
    $('.btn-map').html(`<p>顯示列表</p>
                        <i class="fa-regular fa-list-ul"></i>`)
  } else {
    $('.btn-map').html(`<p>顯示地圖</p>
                        <i class="fa-solid fa-map"></i>`)
  }
})
window.onresize = () => map.invalidateSize

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map)

//初始化marker

let locGroup = [
  { lat: 25.0367219, lng: 121.5600938, price: 5000, url: '../Profile/Profile.html' },
  { lat: 24.0367219, lng: 120.5600938, price: 4000, url: '../Profile/Profile.html' },
  { lat: 23.0367219, lng: 121, price: 3000, url: '../Profile/Profile.html' }
]

function setMarker() {
  // 建立marker
  locGroup.forEach(item => {
    let popup = L.popup().setLatLng([item.lat, item.lng]).setContent(`<a href="${item.url}" class="product-link">\$${item.price}&nbsp;TWD</a>`).openOn(map)
    markers.addLayer(popup)
  })
  map.addLayer(markers)
}
setMarker()
