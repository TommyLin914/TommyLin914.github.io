let lat = 25
let lng = 121.5
let zoom = 9
var map = L.map('map').setView([lat, lng], zoom)
let markers = L.markerClusterGroup()

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map)

//初始化marker

let loc101 = { lat: 25.0367219, lng: 121.5600938,price:5000 }
function setMarker() {
    // 建立marker
    let marker = L.marker([loc101.lat,loc101.lng])
    marker.bindPopup(`<p>\$${loc101.price}&nbsp;TWD</p>`)
    markers.addLayer(marker)
    map.addLayer(markers)
}
setMarker()