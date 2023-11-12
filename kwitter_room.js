function initializeApp(){
const firebaseConfig = {
      apiKey: "AIzaSyDC_6RuAZe3FI4M-G4x8-Dk2wvmFpGksbI",
      authDomain: "class-93-2464c.firebaseapp.com",
      databaseURL: "https://class-93-2464c-default-rtdb.firebaseio.com",
      projectId: "class-93-2464c",
      storageBucket: "class-93-2464c.appspot.com",
      messagingSenderId: "121913255104",
      appId: "1:121913255104:web:543d3478cb83109cb5f925",
      measurementId: "G-KPBG6PGXSX"
      };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
