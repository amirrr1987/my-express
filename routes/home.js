const express = require('express');
const router = express.Router();
const path = require('path')
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

router.put('/contact', (req, res) => {
    res.status(203);
    res.end('updated')
});
router.delete('/contact', (req, res) => {
    res.status(204);
    res.end()
});
router.post('/contact', (req, res) => {
    res.status(201);
    res.sendFile(path.join(__dirname, '../public/home/contact.html'));
});

router.get('/contact', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../public/home/contact.html'));
});

module.exports = router;