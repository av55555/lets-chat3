var firebaseConfig = {
      apiKey: "AIzaSyDFMl9A5vdnqfNwpyQ06zOgIGum_v-2FdU",
      authDomain: "kwitter-f1d2b.firebaseapp.com",
      databaseURL: "https://kwitter-f1d2b-default-rtdb.firebaseio.com",
      projectId: "kwitter-f1d2b",
      storageBucket: "kwitter-f1d2b.appspot.com",
      messagingSenderId: "409132820177",
      appId: "1:409132820177:web:75cd6ff4c6d742e5a987f0",
      measurementId: "G-KF9545S3RC"
    };
   
    firebase.initializeApp(firebaseConfig);
    

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row= "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML=row;
      });});}
getData();



function addroom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="Kwitter_page.html";
}