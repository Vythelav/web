
let nameNodes = document.querySelector(`#name`);
let emailNodes = document.querySelector(`#email`);
let subjectsNodes = document.querySelector(`#subjects`);
let messageNodes = document.querySelector(`#message`);
let buttonNode = document.querySelector(`#submit`);
let openNode = document.getElementById('loginForm')

buttonNode.addEventListener(`click`, function () {
    let allFilled = true;

    if (nameNodes.value === '' && emailNodes.value === '' && subjectsNodes.value === '' && messageNodes.value === '') {
        allFilled = false;
    }

    if (!allFilled) {
        alert(`Заполните форму`);
    } else {
        alert(`Сообщение отправлено`);
    }
});

function changeImage() {
    let imegNode = document.querySelector(`#imeg`)
    if (imegNode.src.match(`./assets/smile.png`)) {
        imegNode.src = `./assets/sm.png`
    } else {
        imegNode.src = `./assets/smile.png`
    }
}

// openNode.addEventListener('submit', function(event) {
//     event.preventDefault();

//     let email = document.getElementById('open_email');
//     let password = document.getElementById('password');

//     if (email.value === 'slavik.gusarow@yandex.ru' && password.value === 'admin') {
//         alert('Успешный вход в аккаунт!');
//         window.location.href = './akk.html';
//     } else {
//         alert('Неверное имя пользователя или пароль. Попробуйте еще раз.');
//     }
// });

