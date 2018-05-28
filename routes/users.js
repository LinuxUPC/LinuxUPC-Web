const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'index page' });
});

router.get('/blog', function(req, res, next){
    res.render('blog')
})


module.exports = router;
