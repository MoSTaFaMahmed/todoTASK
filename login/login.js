/*Passowrd Validation Minimum eight characters, at least one letter and one number:*/
var passwordregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
/*Email Validation*/
var mregex = /^[a-zA-Z]{3,}(@)[a-zA-Z]{5,}(.)(com|net|edu|org)$/;
function handleLogin() {
 
     var password=document.getElementById("password").value;
     var email=document.getElementById("email-address").value;

     if (mregex.test(email)) {
          document.getElementById("emailspan").innerHTML = "";
     } else {
          document.getElementById("emailspan").innerHTML = "Email Not Vaild";
     }

     if (passwordregex.test(password)) {
          document.getElementById("passowrdspan").innerHTML ="";
     } else {
          document.getElementById("passowrdspan").innerHTML =
               "Passowrd not vaild";
     }

     if (mregex.test(email) && passwordregex.test(password)) {
          signin(email, password);
     }
}
// signin();
function signin(username, password) {

     //  var users=new Array();
     var users = JSON.parse(localStorage.getItem("users"));
     var success = users.some(function (user) {
          return (user["UserEmail"] == username && user["UserPassword"] == password)
     });
     if (success) {
          window.location.href ='../home/home.html';
     }
     else {
          alert("Sign Up First");
     }
    
}


