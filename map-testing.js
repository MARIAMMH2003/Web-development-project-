function initMap(){
    var options={
     center:{ lat:29.971829446,lng:31.1360000},
     zoom:8
    }
map=new google.maps.Map(document.getElementById("map"),options)


google.maps.event.addListener(map,'click',function(event){
 
    addMarker({location:event.latLng});
    
});


function Geocoder(address, latitudes, longitudes) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            latitudes.textContent = "Latitude: " + latitude;
            longitudes.textContent = "Longitude: " + longitude;
        } else {
            console.error('Geocode was not successful for the following reason: ' + status);
        }
    });
}

// Get all edit buttons and show each info window that has latitude: and longitude: and then call the function to return their actual values
var Show = document.querySelectorAll('.show-btn');
Show.forEach(function (button) {
    button.addEventListener('click', function () {
        var container = this.closest('.location');
        var infowindow = container.querySelector('.location-info');
        infowindow.style.display = 'block';
        var latitude = infowindow.querySelector('#latitude');
        var longitude = infowindow.querySelector('#longitude');
        var address = container.querySelector('a').textContent.trim();
        Geocoder(address, latitude, longitude);
    });
});


// Get all confirm edit buttons and once clicked the info window is closed
var confirm = document.querySelectorAll('.confirm-btn');
confirm.forEach(function (button) {
    button.addEventListener('click', function () {
        console.log('Changes saved!');
        var infowindow = this.parentElement;
        infowindow.style.display = 'none';//refers to the parent element of the button
    });
});
// ///////////////////////////////////////////////////////////////////////////

// add marker for diff locations
var markers=[];
function addMarker(property){

markers.forEach(marker=>{
marker.setMap(null);
});

 markers=[];

    const marker=new google.maps.Marker({
        position:property.location,
        map:map
    });

    markers.push(marker);

//     if(property.imageIcon){
//         marker.setIcon(property.imageicon);
//     }

//     if(property.content){
//     const detailwindow=new google.maps.InfoWindow({
//     content:property.content
//     });

//     marker.addListener("click",()=>{
//         detailwindow.open(map,marker);
//         slider();
//     })
    
//     marker.addListener("mouseout",()=>{
//         detailwindow.close(map,marker);
//     })
// }

}


// var myIndex = 0;
// 		function slider() {
// 			var images = document.getElementsByClassName("mySlidespic","mySlidespic");
// 			for (var i = 0; i < images.length; i++) {
// 				images[i].style.display = "none";
// 			}

// 			if (myIndex > images.length - 1) {
// 				myIndex = 0;
// 			}
// 			images[myIndex].style.display = "block";
// 			myIndex++;
// 			setTimeout(slider, 2000); // Change image every 2 seconds
// 		}
	

        function addMarkerAndCenter(location) {
            addMarker({ location: location });
            map.setCenter(location);
        }

        function geocodeMarker(address) {
            const GEOCODE = new google.maps.Geocoder();
            GEOCODE.geocode({ 'address': address }, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK && results[0]) {
                    const location = results[0].geometry.location;
                    addMarkerAndCenter(location);
                } else {
                    console.error("Geocode was not successful for the following reason: " + status);
                }
            });
        }

        const links = document.querySelectorAll('.link');
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const address = this.textContent.trim();
        geocodeMarker(address);
    });
});

      
}
window.addEventListener('load', function() {
    var contain = document.querySelector('.container');
    var middleLocation = document.querySelector('.location:nth-child(5)'); 
    var middlepos = middleLocation.getBoundingClientRect(); 

    contain.scrollLeft = middlepos.left - (window.innerWidth - middlepos.width) / 2; 
});


document.addEventListener('DOMContentLoaded', function() {
    const search = document.getElementById('searchInput');
    const museums = document.querySelectorAll('.location');

    search.addEventListener('input', function() {
        const searchTerm = search.value.toLowerCase().trim();
        museums.forEach(museum => {
            const museumName = museum.querySelector('.link').innerText.toLowerCase();
            if (museumName.includes(searchTerm)) {
                museum.style.display = 'block';
            } else {
                museum.style.display = 'none';
            }
        });
    });
});






