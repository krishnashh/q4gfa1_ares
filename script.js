    var Name = document.getElementById("Name");
    var userN = document.getElementById("userName");
    var Gender = document.getElementById("SEI");
    var Pass = document.getElementById("pword");
    var email = document.getElementById("email");
    var address = document.getElementById("address");
    var interests = document.getElementById("tArea");


    function checkName(){
        if (Name.value == "") {
            Name.style.border = "2px solid red";
        }
        else {
            Name.style.border = "2px solid green";
        }
    }

    function checkUser(){
        if (userN.value == "") {
            userN.style.border = "2px solid red";
        }
        else {
            userN.style.border = "2px solid green";
        }
    }

    function checkSex(){
        if (Gender.value == "") {
            Gender.style.border = "2px solid red";
        }
        else {
            Gender.style.border = "2px solid green";
        }
    }

    function checkPass(){
        if (Pass.value == "") {
            Pass.style.border = "2px solid red";
        }
        else {
            Pass.style.border = "2px solid green";
        }
    }

    function checkEmail(){
        if (email.value == "") {
            email.style.border = "2px solid red";
        }
        else {
            email.style.border = "2px solid green";
        }
    }

    function checkAddress(){
        if (address.value == "") {
            address.style.border = "2px solid red";
        }
        else {
            address.style.border = "2px solid green";
        }
    }

    function checkInterests(){
        if (interests.value == "") {
            interests.style.border = "2px solid red";
        }
        else {
            interests.style.border = "2px solid green";
        }
    }

    var form = document.getElementById("login");
form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    displayInformation();
});

    function displayInformation(){
    var out = document.getElementById("output");
    out.innerHTML ="Name: " + Name.value+ "</br>" + "Username: " + userN.value + "</br>" + "Sex Indentity: " +
        Gender.value + "</br>" + "Password: "+ Pass.value + "</br>" + "Email: " + email.value + "</br>"
        + "Address: " + address.value + "</br>" + "Interests: " + interests.value;
    }
