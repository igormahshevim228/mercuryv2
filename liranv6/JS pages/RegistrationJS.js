
function validateForm() {

    var res = true;

    res = userNameVal() && res;
    res = passwordVal() && res;
    res = confirmFun() && res;
    res = confirmemail() && res;
    res = confirmPhone() && res;

    return res;

}

function userNameVal() {
    var username = document.getElementById("username").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.innerHTML = "You must enter a username and password.";
        errorMessage.style.color = "red";
        return false; // Prevent form submission
    }
    if (!isLetter(username[0])) {
        errorMessage.innerHTML = "User name must start with a letter ";
        errorMessage.style.color = "red";
        return false;
    }
        errorMessage.innerHTML  = ""; // Clear error message
        return true; // Allow form submission
}


function passwordVal() {
    var password = document.getElementById("password").value;
    var passwordMsg = document.getElementById("passwordMsg");
    if (password.length < 7) {
        
        passwordMsg.innerHTML = "password must contain at least 7 charactes";
        passwordMsg.style.color = "red";
    
        return false;
    }
    var specialChar = /[@!#$%^&*()-+]/; //regular Expretion
    if (!specialChar.test(password)) {
      
        passwordMsg.innerHTML = "password must contain one special char";
        passwordMsg.style.color = "red";
       
        return false;
    }
    passwordMsg.innerHTML = "";
    return true;
}

function confirmFun() {
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirmation password").value;
    var confirmMsg = document.getElementById("confirmMsg");

    if (password != confirm) {
        confirmMsg.innerHTML = "confirm password doesn't match password";
        confirmMsg.style.color = "red";
        return false;
    }
    confirmMsg.innerHTML = "";
    return true;
}

function confirmemail() {

    var email = document.getElementById("email").value;
    var emailMsg = document.getElementById("emailMsg");

    var reg = /^\w+/;
    if (!reg.test(email)) {
        emailMsg.innerHTML = "mail must start with letter or digit";
        emailMsg.style.color = "red";
        return false;
    }
    emailMsg.innerHTML = "";
    reg = /^\w+([\.-]?\w+)/;
    if (!reg.test(email)) {
        emailMsg.innerHTML = "mail can have only one [. or -] following letter ";
        emailMsg.style.color = "red";
        return false;
    }
    emailMsg.innerHTML = "";
    reg = /^\w+([\.-]?\w+)*@/;
    if (!reg.test(email)) {
        emailMsg.innerHTML = "mail must have @";
        emailMsg.style.color = "red";
        return false;
    }
    emailMsg.innerHTML = "";
    reg = /^\w+([\.-]?\w+)*@\w+/;
    if (!reg.test(email)) {
        emailMsg.innerHTML = "you need letters after @";
        emailMsg.style.color = "red";
        return false;
    }
   
    emailMsg.innerHTML = "";
    reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!reg.test(email)) {
        emailMsg.innerHTML = "Invalid email";
        emailMsg.style.color = "red";
        return false;
    }

    emailMsg.innerHTML = "";
    return true;
}

function confirmPhone() {
    //var phone = document.getElementById("phoneNumber").value;
    //var phoneMsg = document.getElementById("phoneMsg");

    //var reg = /^0{1}(2|3|4|6|8|9|5[0|(2-8)]|73)-?[1-9]\d{6}$/;
    //if (!reg.test(phone)) {
    //    phoneMsg.innerHTML = "phone number is illegal";
    //    return false;
    //}
    phoneMsg.innerHTML = "";
    return true;
}

function isDigit(ch) {
    if (ch >= "0" && ch <= "9")
        true;
    false;
}

function isLetter(ch) {
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"))
        return true;
    return false;
}

function sequence(str) {
    // check for sequence of three characters;
    var seq = false;
    var a, b, c;
    for (var i = 1; i < str.length - 1; i++) {
        a = str.charCodeAt(i - 1);
        b = str.charCodeAt(i);
        c = str.charCodeAt(i + 1);


        if (a + 1 == b && b + 1 == c) {
            return true;
        }

    }
    return seq;
}


function seq(str) {

    for (var i = 0; i < str.length - 2; i++) {

        if (str[i] == str[i + 1] && str[i] == str[i + 2]) {
            return false;
        }
    }
    return true;
}