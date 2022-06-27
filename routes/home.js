const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../views/home/index.html'));
});

router.get('/about', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../views/home/about.html'));
});

router.get('/service', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../views/home/service.html'));
});

router.get('/service/:id', (req, res) => {
    res.status(200);
    res.send(req.params.id)
});


router.route('/contact')
    .get((req, res) => {
        res.status(200);
        res.sendFile(path.join(__dirname, '../views/home/contact.html'));
    })
    .post((req, res) => {
        res.status(201);
        res.sendFile(path.join(__dirname, '../views/home/contact.html'));
    })
    .put((req, res) => {
        res.status(200);
        res.sendFile(path.join(__dirname, '../views/home/contact.html'));
    })
    .delete((req, res) => {
        res.status(204);
        res.sendFile(path.join(__dirname, '../views/home/contact.html'));
    })

module.exports = router;