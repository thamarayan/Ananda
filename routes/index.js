var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home | Ananda Fireworks' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About | Ananda Fireworks' });
});

router.get('/contact', function(req,res,next){
  res.render('contact',{title:'Contact | Ananda Fireworks'})
})

router.get('/safetyTips', function(req,res,next){
  res.render('safetyTips',{title:'Safety Tips | Ananda Fireworks'})
})

router.get('/whereToBuy', function(req,res,next){
  res.render('whereToBuy',{title:'WhereToBuy | Ananda Fireworks'})
})

module.exports = router;
