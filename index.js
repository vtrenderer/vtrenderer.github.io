const firebaseConfig = {
  apiKey: "AIzaSyA6tzaUZN8hVdDa75nioEDoXWiP-Gl8FVQ",
  authDomain: "voice-thenticate.firebaseapp.com",
  databaseURL: "https://voice-thenticate-default-rtdb.firebaseio.com",
  projectId: "voice-thenticate",
  storageBucket: "voice-thenticate.appspot.com",
  messagingSenderId: "583252692015",
  appId: "1:583252692015:web:9615861360f2bcc69a8ada",
  measurementId: "G-KR9Z6EHF56"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database()
  
var user_ref = database.ref(document.getElementById('username').value)
user_ref.on('value', function(snapshot) {
  var userData = snapshot.val()
    
  document.querySelector("#full_name").innerHTML = userData.full_name;
  document.querySelector("#course").innerHTML = userData.course;
  document.querySelector("#email").innerHTML = userData.email;
  document.querySelector("#address").innerHTML = userData.address;
  document.querySelector("#date_of_birth").innerHTML = userData.date_of_birth;
})
