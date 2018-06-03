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
                            link: 'https://www.google.es'},
                            {title: 'Nothing2',
                            description: 'Test2',
                            link: req.protocol + '://' + req.get('host') + req.originalUrl + '/test'}
                        ]});
});

module.exports = router;
