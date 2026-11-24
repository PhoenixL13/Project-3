var map;

function initMap() {
  var mapDiv = document.getElementById('map');
  if (!mapDiv) {
    return;
  }

  /* Feature 1: Map Type Control */
  map = new google.maps.Map(mapDiv, {
    center: {lat: 41.8818, lng: -87.6232},
    zoom: 8,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'terrain', 'satellite']
    }
  });

  /* Feature 2: Marker */
  var marker = new google.maps.Marker({
    position: {lat: -34.397, lng: 150.644},
    map: map,
    title: 'My Map Location',
    animation: google.maps.Animation.DROP
  });

  /* Feature 3: InfoWindow */
  var infoWindow = new google.maps.InfoWindow({
    content: '<h3>My Map Location</h3><p>Welcome to my interactive Google Map!</p>'
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}

/* Questions Button */
function initQuestions() {
  var questionsBtn = document.getElementById('questions-btn');
  if (questionsBtn) {
    questionsBtn.addEventListener('click', function() {
      alert("If you have questions, contact me at: pling1@hawk.illinoistech.edu");
    });
  }
}

window.addEventListener('DOMContentLoaded', initQuestions);
