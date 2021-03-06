// var name = document.getElementById("event_name");
// var date = document.getElementById("event_date");
// var time = document.getElementById("event_time");
// var loc = document.getElementById("event_loc");


var config = {
  apiKey: "AIzaSyChWJeABaui_DYZx2fZRbHDkic8d41Y5X8",
  authDomain: "uciconnect-4f491.firebaseapp.com",
  databaseURL: "https://uciconnect-4f491.firebaseio.com",
  projectId: "uciconnect-4f491",
  storageBucket: "uciconnect-4f491.appspot.com",
  messagingSenderId: "489906754889"
};
firebase.initializeApp(config);

var rootRef = firebase.database().ref().child('events').push();


$('#submit_button').click(function() {
  if (checkIfValid()) {
    rootRef.set({
      name:$('#event_name').val(),
      date:$('#event_date').val(),
      time:$('#event_time').val(),
      loc:$('#event_loc').val(),
      tags:$('#event_tags').val()
    });
    var hostRef = rootRef.child('eventHost');
    hostRef.set({
      contact_info:$('#contact_number').val(),
      host_name:$('#host_name').val()
    });
    location.href = "browse.html";
  }
})

function checkIfValid() {
  var inputs = document.getElementsByTagName('input');
  for (i=0; i<inputs.length; i++) {
    if(inputs[i].checkValidity()) {
      ;
    }
    else {
      alert(inputs[i].id + ": " + inputs[i].validationMessage);
      return false;
    }
  }
  return true;
}