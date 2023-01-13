"use strict";



let button = document.getElementById("submit");

button.addEventListener("click", function(e){
    
    e.preventDefault();

    let userEmail = document.getElementById("username").value;
    let userPassword = document.getElementById("password").value;

    alert("Email: " + userEmail + " Password: " + userPassword);

})

