function validate1(){
var _username = document.login.username.value
var _password = document.login.password.value
var ok = true

var checkusername = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;
var checkpassword = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;
if (!_username.match(checkusername)){
    document.getElementById("loiusername").style.display = "block";
    ok =false;
} else {
    document.getElementById("loiusername").style.display = "none";
}
if (!_password.match(checkpassword)){
    document.getElementById("loipass").style.display = "block";
    ok =false;
} else {
    document.getElementById("loipass").style.display = "none";
}
if (ok) {
    alert("thanh cong");
    return ok;
} else return ok;
}

