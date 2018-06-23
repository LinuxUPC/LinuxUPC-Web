const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', {});
});


router.get('/blog', function(req, res, next){
    res.render('blog', {blocks: [
            {title: 'Nothing',
                description: 'Test',
                link: req.protocol + '://' + req.get('host') + req.originalUrl + '/test'},
            {title: 'Nothing2',
                description: 'Test2',
                link: req.protocol + '://' + req.get('host') + req.originalUrl + '/test'}
        ]});
});

router.get('/project', function(req, res, next){
    res.render('project', {blocks: [
            {title: 'Curs1',
                description: 'Test',
                link: 'https://www.google.es'},
            {title: 'Curs2',
                description: 'Test2',
                link: req.protocol + '://' + req.get('host') + req.originalUrl + '/test'}
        ]});
});

router.get('/contact', function(req, res, next){
    res.render('contactForm', {});
});


module.exports = router;
