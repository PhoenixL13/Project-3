function initMap() {
  const mapContainer = document.getElementById('map');
  if (!mapContainer) return;

  const centerCoords = { lat: 41.8818, lng: -87.6232 };

  /* Feature 1 */
  const map = new google.maps.Map(mapContainer, {
    zoom: 13,
    center: centerCoords,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'terrain', 'satellite']
    }
  });

  /* Feature 2 */
  const marker = new google.maps.Marker({
    position: centerCoords,
    map: map,
    title: 'Featured Location',
    animation: google.maps.Animation.DROP
  });

  /* Feature 3*/
  const infoWindow = new google.maps.InfoWindow({
    content: '<h3>Featured Location</h3><p>Welcome to my interactive Google Map!</p>'
  });

  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });
}

/*Question Button */
function setupQuestionsButton() {
  const questionsBtn = document.getElementById('questions-btn');
  
  if (questionsBtn) {
    questionsBtn.addEventListener('click', () => {
      // \n creates the required two-line alert message
      alert("If you have questions, contact me at: pling1@hawk.illinoistech.edu");
    });
  }
}

window.addEventListener('DOMContentLoaded', setupQuestionsButton);
