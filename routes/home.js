const express = require('express');
const router = express.Router();
const path = require('path');


let title = 'UpConstruction'
let usefulLink = {
    title: 'Useful Links',
    myList: [
        { text: 'About services', link: '/about' },
        { text: 'About Departments', link: '/about' },
        { text: 'Services', link: '/service' },
        { text: 'Contacts', link: '/contact' }
    ]
}
let theServices = {
    title: 'The Services',
    myList: [
        { text: 'About Us', link: '/about' },
        { text: 'About services', link: '/about' },
        { text: 'About Departments', link: '/about' },
        { text: 'Services', link: '/service' },
        { text: 'Contacts Us', link: '/contact' }
    ]
}


router.get('/', (req, res) => {
    res.status(200);
    res.render('home/index', { title, usefulLink, theServices });
});

router.get('/about', (req, res) => {
    res.status(200);
    res.render('home/about', { title, usefulLink, theServices });
});

router.get('/services', (req, res) => {
    res.status(200);
    res.render('home/services', { title, usefulLink, theServices });
});

router.get('/service/:id', (req, res) => {
    res.status(200);
    res.send(req.params.id)
});

router.get('/projects', (req, res) => {
    res.status(200);
    res.render('home/projects', { title, usefulLink, theServices });
});

router.get('/blog', (req, res) => {
    res.status(200);
    res.render('home/blog', { title, usefulLink, theServices });
});


router.route('/contact')
    .get((req, res) => {
        res.status(200);
        res.render('home/contact', { title, usefulLink, theServices });
    })
    .post((req, res) => {
        res.status(201);
        res.render('home/contact');
    })
    .put((req, res) => {
        res.status(200);
        res.render('home/contact');
    })
    .delete((req, res) => {
        res.status(204);
        res.render('home/contact');
    })

module.exports = router;