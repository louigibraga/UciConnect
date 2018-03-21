function getIdParameter() {
	var params = new URLSearchParams(window.location.search);
	return params.get("id");
}

function initMap() {
  var aldrich_park = {lat: 33.646066, lng: -117.842774};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: aldrich_park
  });
  var marker = new google.maps.Marker({
    position: aldrich_park,
    map: map
  });
}

(window.onload = function() {

	const config = {
    apiKey: "AIzaSyChWJeABaui_DYZx2fZRbHDkic8d41Y5X8",
    authDomain: "uciconnect-4f491.firebaseapp.com",
    databaseURL: "https://uciconnect-4f491.firebaseio.com",
    projectId: "uciconnect-4f491",
    storageBucket: "uciconnect-4f491.appspot.com",
    messagingSenderId: "489906754889"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var eventsRef = database.ref().child('events');

	var id = getIdParameter();
	var eName = document.getElementsByClassName("event_name");
	var eInfo = document.getElementById("event_info");

	eventsRef.once('value', snap => {
		for (var key in snap.val()) {
			if (key == id) {
				var li_date = document.createElement("li");
				var li_time = document.createElement("li");
				var li_loc = document.createElement("li");
				var li_tags = document.createElement("li");
				var li_hname = document.createElement("li");
				var li_cphone = document.createElement("li");

				for (var key2 in snap.val()[key]) {
					if (key2 == "eventHost") {
						for (var key3 in snap.val()[key][key2]) {
							if (key3 == "host_name") {
								li_hname.textContent = "Contact Person: " + snap.val()[key][key2][key3];
								li_hname.id = key3;
							}
							else {
								li_cphone.textContent = "Contact Phone Number: " + snap.val()[key][key2][key3];
								li_cphone.id = key3;
							}
						}
					}
					else {
						if (key2 == "name") {
							for (var i=0; i<eName.length; i++) {
								eName[i].textContent = snap.val()[key][key2];
							}
						}
						else if (key2 == "date") {
							li_date.textContent = "Date: " + snap.val()[key][key2];
							li_date.id = key2;
						}
						else if (key2 == "time") {
							li_time.textContent = "Time: " + snap.val()[key][key2];
							li_time.id = key2;
						}
						else if (key2 == "loc") {
							li_loc.textContent = "Location: " + snap.val()[key][key2];
							li_loc.id = key2;
						}
						else if (key2 == "tags") {
							li_tags.textContent = "Tags: " + snap.val()[key][key2];
							li_tags.id = key2;
						}
						else {
							;
						}
					}
				}
				eInfo.appendChild(li_date);
				eInfo.appendChild(li_time);
				eInfo.appendChild(li_loc);
				eInfo.appendChild(li_tags);
				eInfo.appendChild(li_hname);
				eInfo.appendChild(li_cphone);

			}
		}
	})
}());