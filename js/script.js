// 1. Google Maps Initialization (Runs automatically via &callback=initMap on map.html)
function initMap() {
  const mapContainer = document.getElementById('map');
  if (!mapContainer) return; // Prevents errors if called elsewhere

  const centerCoords = { lat: 41.8781, lng: -87.6298 }; // Example: Chicago, IL

  // Base Map + Feature 1: Custom Map Type Control & Styled Map
  const map = new google.maps.Map(mapContainer, {
    zoom: 13,
    center: centerCoords,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      mapTypeIds: ['roadmap', 'terrain', 'satellite']
    }
  });

  // Feature 2: Custom Marker
  const marker = new google.maps.Marker({
    position: centerCoords,
    map: map,
    title: 'Featured Location',
    animation: google.maps.Animation.DROP
  });

  // Feature 3: InfoWindow (Opens on marker click)
  const infoWindow = new google.maps.InfoWindow({
    content: '<h3>Featured Location</h3><p>Welcome to my interactive Google Map!</p>'
  });

  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });
}

// 2. Questions Button Event Listener (Runs safely across all 4 HTML pages)
function setupQuestionsButton() {
  const questionsBtn = document.getElementById('questions-btn');
  
  if (questionsBtn) {
    questionsBtn.addEventListener('click', () => {
      // \n creates the required two-line alert message
      alert('If you have questions, contact me at:\nyouremail@example.com');
    });
  }
}

window.addEventListener('DOMContentLoaded', setupQuestionsButton);
