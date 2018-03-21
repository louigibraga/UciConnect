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
var userRef = database.ref().child("users");

function validateFormOnSubmit(form) {
  var userFirstName = document.getElementById("first-name").value;
  var userLastName = document.getElementById("last-name").value;
  var userPhoneNum = document.getElementById("phone-num").value;
  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;

  userRef.once('value', snap => {
    for (var key in snap.val()) {
      for (var key2 in snap.val()[key]) {
        if (key2 == "email") {
          if (userEmail == snap.val()[key][key2]) {
            console.log(snap.val()[key][key2]);
            return console.log("account already exists");
          }
        }
      }
    }
  });

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).then( function(user) {
    userRef.push().set( {
      firstname: userFirstName,
      lastname: userLastName,
      phonenum: userPhoneNum,
      email: userEmail
    });
    window.location.replace("index.html");
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error code: " + errorCode + " Error : " + errorMessage);
    // ...
  });


};

