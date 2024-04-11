document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("open_email").value;
    let password = document.getElementById("password").value;
    let emailRegistr = document.getElementById("emailRegistr").value;
    let passwordRegistr = document.getElementById("passwordRegistr").value;

    let users = {
        email: [],
        password: []
    }
    let found = false
    function addToValuesArray() {
        users.email.push(emailRegistr)
        users.password.push(passwordRegistr)

    }
    for (let i = 0; i < users.email.length; i++) {
        for (let j = 0; j < users.password.length; j++) {
            if (email ==  users.email[i] && password == users.password[j]) {
                window.location.href = "akk.html";
                found = true
                break
        }
    }
    }
    if(found){
        alert("Регистрация успешна")

    } else {
        alert("Такого пользовотеля не существует")
    }

});