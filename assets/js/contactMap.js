// number of markers
//drop them on the map
// consecutively, rather than all at once. 
// window.setTimeout() to space your markers' animation.
const coffehouses = [
  {  lat: 53.386362,
                lng: -6.37798 },
  { lat: 53.346709,
                lng: -6.259782 },
  { lat: 53.288782,
                lng: -6.244698},
  { lat: 53.344063,
                lng: -6.259439},
  { lat: 53.340057,
                lng: -6.260615},
  { lat: 53.340787,
                lng: -6.258618},
  {lat: 53.321309,
                lng: -6.392621},
];
let markers = [];
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { 
        lat: 53.3498,
        lng: -6.2603
    },
  });
}

function drop() {
  clearMarkers();

  for (let i = 0; i < coffehouses.length; i++) {
    addMarkerWithTimeout(coffehouses[i], i * 200);
  }
}

function addMarkerWithTimeout(position, timeout) {
  window.setTimeout(() => {
    markers.push(
      new google.maps.Marker({
        position: position,
        map,
        animation: google.maps.Animation.DROP,
      })
    );
  }, timeout);
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
