//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDC_6RuAZe3FI4M-G4x8-Dk2wvmFpGksbI",
      authDomain: "class-93-2464c.firebaseapp.com",
      databaseURL: "https://class-93-2464c-default-rtdb.firebaseio.com",
      projectId: "class-93-2464c",
      storageBucket: "class-93-2464c.appspot.com",
      messagingSenderId: "121913255104",
      appId: "1:121913255104:web:543d3478cb83109cb5f925",
      measurementId: "G-KPBG6PGXSX"
      };
      firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}