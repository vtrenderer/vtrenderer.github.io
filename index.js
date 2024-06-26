document.querySelector("#full_name").innerHTML = username;
FileInputStream serviceAccount =
new FileInputStream("voice-thenticate-firebase-adminsdk-nsv2t-382664e757.json");

FirebaseOptions options = new FirebaseOptions.Builder()
  .setCredentials(GoogleCredentials.fromStream(serviceAccount))
  .setDatabaseUrl("https://voice-thenticate-default-rtdb.firebaseio.com")
  .build();

FirebaseApp.initializeApp(options);


// var firebaseConfig = {
//   apiKey: "AIzaSyA6tzaUZN8hVdDa75nioEDoXWiP-Gl8FVQ",
//   authDomain: "voice-thenticate.firebaseapp.com",
//   databaseURL: "https://voice-thenticate-default-rtdb.firebaseio.com",
//   projectId: "voice-thenticate",
//   storageBucket: "voice-thenticate.appspot.com",
//   messagingSenderId: "583252692015",
//   appId: "1:583252692015:web:9615861360f2bcc69a8ada",
//   measurementId: "G-KR9Z6EHF56"
// };

// firebase.initializeApp(firebaseConfig);
var database = FirebaseApp.database()
  
var user_ref = database.ref(document.getElementById('username').value)
user_ref.on('value', function(snapshot) {
  var userData = snapshot.val()

  var full_name = userData.full_name
  var course = userData.course
  var email = userData.email
  var address = userData.address
  var date_of_birth = userData.date_of_birth
})

document.querySelector("#full_name").innerHTML = full_name;
document.querySelector("#email").innerHTML = email;
document.querySelector("#course").innerHTML = course;
document.querySelector("#address").innerHTML = address;
document.querySelector("#date_of_birth").innerHTML = date_of_birth;
