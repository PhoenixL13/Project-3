function init(){
  var questionsBtn = document.getElementById('questions-btn');
	if (questionsBtn) {
		questionsBtn.addEventListener('click', function() {
			alert('If you have questions, contact me at:pling1@hawk.illinoistech.edu');
		});
	}
	
  var el = document.getElementById('canvas');
  if (!el) {
    return;
  }
  var myLocation = new google.maps.LatLng(41.835117, -87.627130);
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'iit-icon.png'
  });

  var contentString = '<h1>IIT Perlstein Hall</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });

  /* Feature 1: Click marker to zoom in and center */
	google.maps.event.addListener(marker, 'click', function() {
		myMap.setZoom(20);
		myMap.setCenter(marker.getPosition());
	});

	/* Feature 2: Highlighted circle radius around Perlstein Hall */
	var campusCircle = new google.maps.Circle({
		strokeColor: '#cc0000',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: '#cc0000',
		fillOpacity: 0.2,
		map: myMap,
		center: myLocation,
		radius: 40
	});

  /* Feature 3: Click counter */
	var clickCount = 0;
	google.maps.event.addListener(myMap, 'click', function(event) {
		clickCount++;
		new google.maps.Marker({
			position: event.latLng,
			map: myMap,
			label: String(clickCount)
		});
	});

}

window.addEventListener('load', init);
