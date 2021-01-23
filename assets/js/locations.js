function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 8,
                center: {
                    lat: 53.3498,
                    lng: -6.2603
                }
            });
            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: 53.386362,
                lng: -6.37798
            }, {
                lat: 53.346709,
                lng: -6.259782
            }, {
                lat: 53.288782,
                lng: -6.244698
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }
