

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const qs = require('querystring');
const methodOverride = require('method-override');
const bodyParser = require('body-parser')

let loggerSystem = (req, res, next) => {
    console.log('LOG');
    next();
}
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// app.use(methodOverride('_method'))


app.get('/', loggerSystem, (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/about', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, './public/about.html'));
});

app.get('/gallery', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, './public/gallery.html'));
});

app.get('/gallery/:id', (req, res) => {
    res.status(200);
    res.send(req.params.id)
});
app.delete('/contact', (req, res) => {
    // res.status(200);
    // res.sendFile(path.join(__dirname, './public/contact.html'));
    res.send('delete')
});

app.get('/contact', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, './public/contact.html'));
});

app.get('/login', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, './public/login.html'));
});
app.post('/login', (req, res) => {

    let loginStatus = false;
    let email = req.body.email
    let pass = req.body.password

    if (email === 'Maghami.A1987@gmail.com' && pass === '1234') {
        loginStatus = true
    }

    if (loginStatus) {
        res.status(301).redirect('/')
    }
    else {
        res.status(301).redirect('/login')

    }
});

app.use((req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, './public/404.html'));
});

app.listen(port, () => { 'server running on port :' + port });