
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDDTzF_rt4nyPEbrh0S1NJqfDWIlJmTm0s",
      authDomain: "kwitter-16ec7.firebaseapp.com",
      databaseURL: "https://kwitter-16ec7-default-rtdb.firebaseio.com",
      projectId: "kwitter-16ec7",
      storageBucket: "kwitter-16ec7.appspot.com",
      messagingSenderId: "975540697848",
      appId: "1:975540697848:web:2bdde6d61232bb13a9d90d"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     username=localStorage.getItem("user");
     document.getElementById("username").innerHTML="welcome "+username+"!";
     function addroom(){
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"ADDINGROOMNAME"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='roomname' id="+Room_names+" onclick='redirectroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
      function redirectroomname(name){
      console.log(name);
      localStorage.setItem("name",name);
      window.location="kwitter_page.html";
      }
      function logout(){
            localStorage.removeItem("username");
            localStorage.removeItem("roomname");
             window.location="index.html";
      } 
     