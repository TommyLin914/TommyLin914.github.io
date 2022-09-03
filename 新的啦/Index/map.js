let lat = 25
let lng = 121.5
let zoom = 9
var map = L.map('map').setView([lat, lng], zoom)
let markers = L.markerClusterGroup()
// set icon


const secMap = document.querySelector('.map-section')
$('.map-btn').click(function () {
  secMap.classList.toggle('show')
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map)

//初始化marker

let locGroup = [
  { lat: 25.0367219, lng: 121.5600938, price: 5000 },
  { lat: 24.0367219, lng: 120.5600938, price: 4000 },
  { lat: 21.0367219, lng: 121.5600938, price: 3000 }
]

function setMarker() {
  // 建立marker
  locGroup.forEach(item => {
    let marker = L.marker([item.lat, item.lng])
    marker.bindPopup(`<p>\$${item.price}&nbsp;TWD</p>`)
    markers.addLayer(marker)
  })
  map.addLayer(markers)
}
setMarker()


