const config = {
  apiKey: "AIzaSyChWJeABaui_DYZx2fZRbHDkic8d41Y5X8",
  authDomain: "uciconnect-4f491.firebaseapp.com",
  databaseURL: "https://uciconnect-4f491.firebaseio.com",
  projectId: "uciconnect-4f491",
  storageBucket: "uciconnect-4f491.appspot.com",
  messagingSenderId: "489906754889"
};
firebase.initializeApp(config);

var profileinfo = document.getElementById("profile-info");


firebase.auth().onAuthStateChanged(function(u) {
	if(u) {
		var firstname = document.createElement("p");
		var lastname = document.createElement("p");
		var phonenum = document.createElement("p");
		var email = document.createElement("p");

		var user = firebase.auth().currentUser;
		if (user) {
			email.innerText = "Email: " + user.email;

			profileinfo.appendChild(email);
		}
		else {
			var text = document.createElement("p");
			text.innerText = "No one is signed in";
			profileinfo.appendChild(text);
		}	
	}
	else {
		var text = document.createElement("p");
		text.innerText = "No one is signed in";
		profileinfo.appendChild(text);
	}	
});
