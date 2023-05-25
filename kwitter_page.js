//YOUR FIREBASE LINKS
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
     user_name=localStorage.getItem("user");
     room_name=localStorage.getItem("roomname");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like= message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
all_together=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=all_together;
//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
       window.location="index.html";
} 
function send(){
      msg=document.getElementById("sendg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("sendg").value=" ";
}
function updatelike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_like=Number(likes)+1;
      console.log(updated_like);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_like
      });
}