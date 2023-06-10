function acceptSignUp() {
    var password = document.getElementById("password_input");
    var password_c = document.getElementById("password_confirm");
    var email = document.getElementById("email_input");
    var username = document.getElementById("username_input");

    if (checkSignUp(email, password, username) && isFilledOut(password) && isFilledOut(email) && isFilledOut(username) && (password.value == password_c.value)) {
        console.log([email.value, password.value, username.value]);
        window.location.href = "../FP/fp.html"
    } else {
        document.getElementById("wrong-input").style.display = "block";
    }    
}

function checkSignUp(email, password, username) {
    return true;
}


function isFilledOut(element) {
    if (element.value.length > 0) {
        return true;
    } else {
        return false;
    }
}


