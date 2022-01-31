
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBh459NkFNe7MImpPxUCDyFmwn8sh9ZQVk",
    authDomain: "lets-chat-web-app-532b9.firebaseapp.com",
    projectId: "lets-chat-web-app-532b9",
    storageBucket: "lets-chat-web-app-532b9.appspot.com",
    messagingSenderId: "843665379947",
    appId: "1:843665379947:web:631a486c9dfa10f13d172e",
    measurementId: "G-DWECPTWSZZ"
  };

  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("username");
document.getElementById("welcome").innerHTML = "Welcome " + user_name + "!";

function add_room(){
  room_name = document.getElementById("input").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding user_name"
  });

  localStorage.setItem("room_name" , room_name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room_name",Room_names);
       row = "<div class = 'room_name' id= "+ Room_names +" onclick = 'redirectToRoomName(this.id)'>#" +  Room_names + "</div> <hr>"
       document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();


function redirectToRoomName(name){
 console.log("room's id" , name);
 localStorage.setItem("room_name" , name);
 window.location = "kwitter_page.html"
}
