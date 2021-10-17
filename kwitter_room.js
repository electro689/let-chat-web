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
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name -" +Room_names);
      row ="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) { 
      console.log(name); 
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
} 


function logout() { 
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name");
       window.location = "index.html";
 }
