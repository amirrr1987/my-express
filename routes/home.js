const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../public/home/index.html'));
});

router.get('/about', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../public/home/about.html'));
});

router.get('/gallery', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../public/home/gallery.html'));
});

router.get('/gallery/:id', (req, res) => {
    res.status(200);
    res.send(req.params.id)
});


router.route('/contact')
    .get((req, res) => {
        res.status(200);
        res.sendFile(path.join(__dirname, '../public/home/contact.html'));
    })
    .post((req, res) => {
        res.status(201);
        res.sendFile(path.join(__dirname, '../public/home/contact.html'));
    })
    .put((req, res) => {
        res.status(200);
        res.sendFile(path.join(__dirname, '../public/home/contact.html'));
    })
    .delete((req, res) => {
        res.status(204);
        res.sendFile(path.join(__dirname, '../public/home/contact.html'));
    })

module.exports = router;