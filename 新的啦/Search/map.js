let lat = 25.0415942
let lng = 121.5340941
let zoom = 9
let markers = L.markerClusterGroup()

var map = L.map('map', {
  center: [lat, lng],
  zoom: 10,
  zoomControl: false
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 13,
  attribution: '© OpenStreetMap'
}).addTo(map)

L.control
  .zoom({
    position: 'topright'
  })
  .addTo(map)

//初始化marker

let locGroup = [
  { lat: 25.0367219, lng: 121.5600938, price: 5000 },
  { lat: 24.0367219, lng: 120.5600938, price: 4000 },
  { lat: 23.0367219, lng: 121, price: 3000 }
]

function setMarker() {
  // 建立marker
  locGroup.forEach(item => { 
    let popup = L.popup().setLatLng([item.lat, item.lng]).setContent(`\$${item.price}&nbsp;TWD`).openOn(map)
    markers.addLayer(popup)
  })
  map.addLayer(markers)
}
window.onload = () => {
  setMarker()
}
