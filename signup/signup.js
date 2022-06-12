
/*Passowrd Validation*/
var passwordregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
/*Email Validation*/
var mregex = /^[a-zA-Z]{3,}(@)[a-zA-Z]{3,}(.)(com|net|edu|org)$/;



function handleRigester() {

     
     var password = document.getElementById("password").value;

     var email = document.getElementById("email-address").value;


     if (mregex.test(email)) {
          document.getElementById("emaspan").innerHTML = "";
     } else {
          document.getElementById("emaspan").innerHTML = "Not Vaild example:mostafa@gmail.com";
     }

     if (passwordregex.test(password)) {
          document.getElementById("passspan").innerHTML ="";
     } else {
          document.getElementById("passspan").innerHTML =
               "Minimum eight characters, at least one letter and one number example:12345678a";
     }

     if (

          mregex.test(email) &&
          passwordregex.test(password)

     ) {
          
          addToLocalStorage(email, password);
          document.getElementById("password").value = "";
          document.getElementById("email-address").value = "";
     }
}

function addToLocalStorage(userName, userPassword) {
     var user = new Array();
        user = JSON.parse(localStorage.getItem("users"))
          ? JSON.parse(localStorage.getItem("users"))
          : [];
     if (
          user.some(function (val) {
               return val.UserEmail == userName;
          })
     ) {
          alert("duplicated UserName");
     } else {

          user.push({
               UserEmail: userName,
               UserPassword: userPassword,
          });
          alert("SignUP Successfuly");


          localStorage.setItem("users", JSON.stringify(user));

          window.location.href ='../login/login.html';


     }


}