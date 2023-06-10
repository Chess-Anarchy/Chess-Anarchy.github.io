function checkSignIn(email, password) {
    return true;
}

function acceptSignIn() {
    var password = document.getElementById("password-input");
    var email = document.getElementById("email-input");

    if (checkSignIn(email, password) && isFilledOut(password) && isFilledOut(email)) {
        console.log([email.value, password.value]);
        window.location.href = "../FP/fp.html"
    } else {
        document.getElementById("wrong-input").style.display = "block";
    }    
}

function isFilledOut(element) {
    if (element.value.length > 0) {
        return true;
    } else {
        return false;
    }
}



