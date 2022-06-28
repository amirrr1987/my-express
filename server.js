

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
// const qs = require('querystring');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override');
const homeRouter = require('./routes/home');
const adminRouter = require('./routes/admin');
const session = require('express-session')
const FileStore = require('session-file-store')(session);
let loggerSystem = (req, res, next) => {
    console.log('LOG');
    next();
};


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cookieParser());

const sess = {
    store: new FileStore({}),
    secret: 'A!@d dsf %89342 dsfsdf *&*8743s sdj&*&*',
    resave: false,
    saveuninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    }
}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use( (req, res, next) => {
    req.active = req.path.split('/')[1] // [0] will be empty since routes start with '/'
    next();
});


app.get('/login', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, './views/home/login.html'));
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
app.use(express.static('public'));
app.use('/', homeRouter);
app.use('/admin', adminRouter);

app.use((req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, './views/home/404.html'));
});

app.listen(port, () => { 'server running on port :' + port });