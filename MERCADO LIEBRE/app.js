const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 3040;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

/* const PORT = 3050; */

 app.use(express.static(path.resolve(__dirname, 'public')));

/* app.listen(PORT, () => console.log('Servidor corriendo 3050')); */

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/home.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/register.html'))
});



/* const express = require('express');
const app = express();
const path = require("path");

app.listen (3030, () =>
    console.log("Corriendo en servidor 3030")
);

app.use(express.static(path.resolve('__dirname, public')));

app.get ("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/home.html"));
});

app.get ("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/login.html"));
});

app.get ("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./src/views/register.html"));
}); */