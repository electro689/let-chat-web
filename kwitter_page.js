//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAMEQQiR2slx9Kirm75Apx7XdvvQgqy6Z4",
      authDomain: "projr-36a9f.firebaseapp.com",
      databaseURL: "https://projr-36a9f-default-rtdb.firebaseio.com",
      projectId: "projr-36a9f",
      storageBucket: "projr-36a9f.appspot.com",
      messagingSenderId: "725309548920",
      appId: "1:725309548920:web:71a89d34c60714ca26c08d",
      measurementId: "G-LXT8WWCMJ5"
    };

    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
