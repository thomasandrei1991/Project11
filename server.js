const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/contact', (req, res) => {
    res.json([
        { id:1, email: 'georgealarcon@gmail.com'},
        { id:2, email: 'reha@gmail.com'},
        { id:3, email: 'ivan@gmail.com'},
        { id:4, email: 'irie@gmail.com'}
    ]);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});