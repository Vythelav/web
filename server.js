const express = require('express');
const bodyParser = require('body-parser');
const { assert } = require('console');
const app = express();

app.use(bodyParser.json());

const users = [
    { email: 'user@1', password: '111' },
    { email: 'admin@1', password: 'admin' }
];

app.post('/register', (req, res) => {
    const { email, password } = req.body;
    
    users.push({ email, password });
    
    res.status(200).send('Пользователь успешно зарегистрирован');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        res.status(200).send('Вход выполнен успешно');
    } else {
        res.status(401).send('Неправильные данные для входа');
    }
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
