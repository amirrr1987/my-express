const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
app.use((req, res, next) => {
    console.log(req.url);
    next();
})
app.get('/',(req, res) => {
    res.sendFile( path.join(__dirname , './public/index.html' ));
})
app.get('/about',(req, res) => {
    res.sendFile( path.join(__dirname , './public/about.html' ));
})
app.get('/gallery',(req, res) => {
    res.sendFile( path.join(__dirname , './public/gallery.html' ));
})
app.get('/contact',(req, res) => {
    res.sendFile( path.join(__dirname , './public/contact.html' ));
})
app.post('/contact', (req, res) => {
    console.log(res);
    res.sendFile( path.join(__dirname , './public/contact.html' ));
})

app.use((req, res) => {
    res.status(404)
    res.sendFile(path.join(__dirname, './public/404.html'));
})

app.listen(port, () => { 'server running on port :' + port });

