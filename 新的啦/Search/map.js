let lat = 25.0415942
let lng = 121.5340941
let zoom = 8
let markers = L.markerClusterGroup()
let map
function setMap() {
  if (map != undefined) {
    map.remove()
  }
  map = L.map('map', {
    center: [lat, lng],
    zoom: zoom,
    zoomControl: false,
    closePopupOnClick: false
  })
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
  }).addTo(map)

  L.control
    .zoom({
      position: 'topright'
    })
    .addTo(map)
}

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

window.onload = () => {
  setMap()
  setMarker()
}
