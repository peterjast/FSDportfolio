$(document).ready(function () {

    var name = "";
    var email = "";
    var subject = "";
    var message = "";
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCo4vrqYzhzfUJYC-D5tTrSkrrCtoI5VLU",
    authDomain: "portfolio-2fdda.firebaseapp.com",
    databaseURL: "https://portfolio-2fdda.firebaseio.com",
    projectId: "portfolio-2fdda",
    storageBucket: "portfolio-2fdda.appspot.com",
    messagingSenderId: "802646292175"
  };
  firebase.initializeApp(config);
 // Create a variable to reference the database
 var database = firebase.database();

 database.ref().on("child_added", function (childSnap) {
    name = childSnap.val().name;
    email = childSnap.val().email;
    subject = childSnap.val().subject;    
    message = childSnap.val().message;

 });    

 // Click Button changes what is stored in firebase
 $("#submit").on("click", function(event) {
   // Prevent the page from refreshing
   event.preventDefault();

    // Get inputs
    name = $("#form_name").val().trim();
    email = $("#form_email").val().trim();
    subject = $("#form_subject").val().trim();
    message = $("#form_message").val().trim();


   var newUser = {
    name: name,
    email: email,
    subject: subject,
    message: message
    }

    console.log(newUser)
    database.ref().push(newUser);

    //clears form  
    $("#form_name").val("");
    $("#form_email").val("");
    $("#form_subject").val("");    
    $("#form_message").val("");   
    
    return false;
    })

});    
