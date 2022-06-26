

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
// const qs = require('querystring');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');
const adminRouter = require('./routes/admin');

let loggerSystem = (req, res, next) => {
    console.log('LOG');
    next();
}
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

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

app.use('/', homeRouter);
app.use('/admin', adminRouter);

app.use((req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, './public/home/404.html'));
});

app.listen(port, () => { 'server running on port :' + port });