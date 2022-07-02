const express = require('express');
const router = express.Router();


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
    // res.end({name: 'amir'});
    // if (req.session.view) {
    //     req.session.view++;
    // }
    // else {
    //     req.session.view = 1;
    // };
    // console.log(req.session.view);
    // res.cookie('name', title, {maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true});
    res.status(200);
    res.render('home/index', { title, usefulLink, theServices, page_name : '/' }, );
    // res.render('sdf')
    // res.render('home/index', {title: 'd'})
    // res.end('sdf')
});

router.get('/about', (req, res) => {
    res.status(200);
    res.render('home/about', { title, usefulLink, theServices, page_name: '/about' });
});

router.get('/services', (req, res) => {
    res.status(200);
    res.render('home/services', { title, usefulLink, theServices, page_name: '/services' });
});

router.get('/service/:id', (req, res) => {
    res.status(200);
    res.send(req.params.id)
});

router.get('/projects', (req, res) => {
    res.status(200);
    res.render('home/projects', { title, usefulLink, theServices, page_name: '/projects' });
});

router.get('/blog', (req, res) => {
    console.log(req.cookies)
    res.status(200);
    res.render('home/blog', { title, usefulLink, theServices, page_name: '/blog' });
});


router.route('/contact')
    .get((req, res) => {
        res.status(200);
        res.render('home/contact', { title, usefulLink, theServices, page_name: '/contact'  });
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