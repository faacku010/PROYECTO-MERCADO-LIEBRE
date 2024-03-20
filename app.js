const express = require('express');
const path = require('path');

const app = express();

app.use( express.static(path.resolve(__dirname, './public')) );

/* const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath) ); */

app.listen(3020,() => {
    console.log(`'servidor corriendo en puerto http://localhost:3020/`);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/home.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/register.html'))
})