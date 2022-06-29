'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override');
const homeRouter = require('./routes/home');
const session = require('express-session')
const FileStore = require('session-file-store')(session);

// const loggerSystem = (req, res, next) => {
//   console.log('LOG');
//   next();
// };

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

const sess = {
  store: new FileStore({}),
  secret: 'A!@d dsf %89342 dsfsdf *&*8743s sdj&*&*',
  resave: false,
  saveuninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
};

if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
  sess.cookie.secure = true;
};

app.use(session(sess))

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));



const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use('/', homeRouter);

app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, './views/404.html'));
});






app.use('/.netlify/functions/server', homeRouter);
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
