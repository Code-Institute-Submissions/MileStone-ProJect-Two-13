function initMap() {
        const myLatLng = { 
            lat: 53.3498,
            lng: -6.2603
                
        };
         
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: myLatLng,
        });
        new google.maps.Marker({
          position: myLatLng,
          map,
          title: "We are Here!",
        });
      }