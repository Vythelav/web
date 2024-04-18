let users = {
    email: [],
    password: []
};

function registerUser() {
    let emailRegistr = document.getElementById("emailRegistr").value;
    let passwordRegistr = document.getElementById("passwordRegistr").value;

    users.email.push(emailRegistr);
    users.password.push(passwordRegistr);
    window.location.href = 'open.html';

    alert("Регистрация успешна");
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("open_email").value;
    let password = document.getElementById("password").value;
    let found = false;

    for (let i = 0; i < users.email.length; i++) {
        if (email === users.email[i] && password === users.password[i]) {
            alert("Вход выполнен успешно");
            window.location.href = 'akk.html';
            found = true;
            break;
        }
    }

    if (!found) {
        alert("Такого пользователя не существует");
    }
});