function validate2(){
var _email = document.signup.email.value;
var _number = document.signup.number.value;
var _user = document.signup.username.value;
var _pass = document.signup.password.value;
var ok = true
var ktemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var ktten = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;
var ktsdt = /^0[0-9]{9,11}$/;
if (!_email.match(ktemail)){
    document.getElementById("loiemail").style.display = "block";
    ok =false;
} else {
    document.getElementById("loiemail").style.display = "none";
}

if(!_number.match(ktsdt)){
    document.getElementById("loisdt").style.display = "block";
    ok =false;
} else {
    document.getElementById("loisdt").style.display = "none";
}

if(!_user.match(ktten)){
    document.getElementById("loiuser").style.display = "block";
    ok =false;
} else {
    document.getElementById("loiuser").style.display = "none";
}

if(!_pass.length < 6){
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


