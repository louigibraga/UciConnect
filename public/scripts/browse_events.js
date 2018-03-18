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
      var event_td_ename = document.createElement('td');
      var event_td_date = document.createElement('td');
      var event_td_time = document.createElement('td');
      var event_td_loc = document.createElement('td');
      var event_td_tags = document.createElement('td');
      var event_td_hname = document.createElement('td');
      var event_td_cphone = document.createElement('td');
      var event_tr = document.createElement('tr');
      event_tr.id = key;

      for (var key2 in snap.val()[key]) {
        if (key2 == "eventHost") {
          for (var key3 in snap.val()[key][key2]) {
            if(key3 == "host_name") {
              event_td_hname.innerText = snap.val()[key][key2][key3];
              event_td_hname.id = key3;
            }
            else {
              event_td_cphone.innerText = snap.val()[key][key2][key3];
              event_td_cphone.id = key3;
            }
          }
        }
        else {
          if(key2 == "name") {
            event_td_ename.innerText = snap.val()[key][key2];
            event_td_ename.id = key2;

          }
          else if (key2 == "date") {
            event_td_date.innerText = snap.val()[key][key2];
            event_td_date.id = key2;
          }
          else if (key2 == "time") {
            event_td_time.innerText = snap.val()[key][key2];
            event_td_time.id = key2;
          }
          else if (key2 == "loc") {
            event_td_loc.innerText = snap.val()[key][key2];
            event_td_loc.id = key2;
          }
          else if (key2 == "tags") {
            event_td_tags.innerText = snap.val()[key][key2];
            event_td_tags.id = key2;
          }
          else {
            ;
          }

        }

      }
      event_tr.appendChild(event_td_ename);
      event_tr.appendChild(event_td_date);
      event_tr.appendChild(event_td_time);
      event_tr.appendChild(event_td_loc);
      event_tr.appendChild(event_td_tags);
      event_tr.appendChild(event_td_hname);
      event_tr.appendChild(event_td_cphone);
      document.getElementById("events_body").appendChild(event_tr);
    }
  })

  var tableHead = document.getElementsByTagName("th")[0];
  sorttable.innerSortFunction.apply(tableHead, []);
}());

function searchTable() {
  var input = document.getElementById("searchBar");
  var filter = input.value.toUpperCase();
  var table = document.getElementById("events_body");
  var tr = table.getElementsByTagName("tr");

  for (var i=0; i<tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[0];
    td2 = tr[i].getElementsByTagName("td")[1];
    td3 = tr[i].getElementsByTagName("td")[2];
    td4 = tr[i].getElementsByTagName("td")[3];
    td5 = tr[i].getElementsByTagName("td")[4];
    td6 = tr[i].getElementsByTagName("td")[5];
    td7 = tr[i].getElementsByTagName("td")[6];
    if (td1.innerHTML.toUpperCase().indexOf(filter) > -1 ||
      td2.innerHTML.toUpperCase().indexOf(filter) > -1 ||
      td3.innerHTML.toUpperCase().indexOf(filter) > -1 ||
      td4.innerHTML.toUpperCase().indexOf(filter) > -1 ||
      td5.innerHTML.toUpperCase().indexOf(filter) > -1 ||
      td6.innerHTML.toUpperCase().indexOf(filter) > -1 ||
      td7.innerHTML.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    }
    else {
      tr[i].style.display = "none";
    }
  }
}
