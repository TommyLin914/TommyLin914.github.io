let lat = 25
let lng = 121.5
let zoom = 9
var map = L.map('map').setView([lat, lng], zoom)


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map)
