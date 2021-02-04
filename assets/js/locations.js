var LocationData = [
    [53.386362, -6.37798, "The Best Teste !" ], 
    [53.346709, -6.259782, "Great Place to Relax!" ], 
    [53.288782, -6.244698, "Favorite Place!" ]
];
    
 
function initMap()
{
    var map = 
        new google.maps.Map(document.getElementById('map'));
    var bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow();
     
    for (var i in LocationData)
    {
        var p = LocationData[i];
        var latlng = new google.maps.LatLng(p[0], p[1]);
        bounds.extend(latlng);
         
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: p[2]
        });
     
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(this.title);
            infowindow.open(map, this);
        });
    }
     
    map.fitBounds(bounds);
}
 