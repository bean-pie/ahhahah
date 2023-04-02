var firebaseConfig = {
    apiKey: "AIzaSyCsVNHL_FspYtzdhh2sr0SG0fFbP5sYYAY",
    authDomain: "kwitter-2-5835f.firebaseapp.com",
    databaseURL: "https://kwitter-2-5835f-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-5835f",
    storageBucket: "kwitter-2-5835f.appspot.com",
    messagingSenderId: "143845580411",
    appId: "1:143845580411:web:29ab72a00518ac80528cde"
  };
  
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    });});}
getData();


function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location="kwitter_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
