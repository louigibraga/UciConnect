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

  //Get element
  // var preObject = document.getElementById('object');
  // var ulList = document.getElementById('list');
  // var eventList = document.getElementById('eventList');

  //Create references
  var dbRefObject = database.ref().child('events');
  // var dbRefList = dbRefObject.child('eventID');


  dbRefObject.on('value', snap => {
    for (var key in snap.val()) {
      var event_div = document.createElement('div');
      event_div.id = key;

      var event_div_title = document.createElement('strong');
      event_div_title.id = snap.val()[key].name;
      event_div_title.innerText = snap.val()[key].name;
      event_div.prepend(event_div_title);

      var event_div_info = document.createElement('ul');
      for (var key2 in snap.val()[key]) {
        var li = document.createElement('li');
        li.innerText = key2 + ": " + snap.val()[key][key2];
        li.id = key2;
        event_div_info.appendChild(li);
      }
      event_div.appendChild(event_div_info);

      document.getElementsByTagName('body')[0].appendChild(event_div);
    }
  });


  // dbRefList.once('value', snap => {
  //   var eventName = document.createElement('strong');
  //   eventName.innerText = snap.val().name;
  //   eventName.id = snap.val().name;
  //   eventList.prepend(eventName);
  // });

  // dbRefList.on('child_added', snap => {
  // 	var li = document.createElement('li');
  // 	li.innerText = snap.val();
  //   li.id = snap.key;
  // 	ulList.appendChild(li);
  // });

  // dbRefList.on('child_changed', snap => {
  //   var liChanged = document.getElementById(snap.key);
  //   liChanged.innerText = snap.val();
  // })

  // dbRefList.on('child_removed', snap => {
  //   var liToRemove = document.getElementById(snap.key);
  //   liToRemove.remove();
  // })

}());