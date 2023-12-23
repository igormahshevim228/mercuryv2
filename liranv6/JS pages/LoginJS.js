
function submitFun() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username.length == 0 || password.length == 0) {

        document.getElementById("divMsg").innerHTML = "You must enter user name and password";
        document.getElementById("divMsg").style.color = "red";
        return false;
    }
  
    return true;


}