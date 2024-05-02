
function registerUser() {
    const email = document.getElementById('emailRegistr').value;
    const password = document.getElementById('passwordRegistr').value;

    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        if (data === 'Пользователь успешно зарегистрирован') {
            window.location.href = 'open.html';
        } else {
            alert('Ошибка при регистрации');
        }
    });
}



function loginUser() {
    const email = document.getElementById('open_email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        if (data === 'Вход выполнен успешно') {
            window.location.href = 'open.html';
        } else {
            alert('Неправильные данные для входа');
        }
    });
}

