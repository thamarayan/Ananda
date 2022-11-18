var express = require('express');
var router = express.Router();

router.get('/groundFantasy', function(req,res,next){
  res.render('products/groundFantasy', {title:'Ground Fantasy | Products'});
})


router.get('/soundsShots', function(req,res,next){
  res.render('products/soundsShots', {title:'Sounds & Shots | Products'});
})

router.get('/celebrationPack', function(req,res,next){
  res.render('products/celebrationPack', {title:'Celebration Pack | Products'});
})

router.get('/nightNovelties', function(req,res,next){
  res.render('products/nightNovelties', {title:'Night Novelties | Products'});
})

router.get('/comets', function(req,res,next){
  res.render('products/comets', {title:'Comets | Products'});
})




// Updated

router.get('/eliteSeries', function(req,res,next){
  res.render('products/eliteSeries', {title:'Elite Series | Products'});
})

router.get('/flowerPots', function(req,res,next){
  res.render('products/flowerPots', {title:'Flower Pots | Products'});
})

router.get('/TwinklingStarBijili', function(req,res,next){
  res.render('products/TwinklingStarBijili', {title:'Twinkling Stars & Bijili | Products'});
})

router.get('/chakkar', function(req,res,next){
  res.render('products/chakkar', {title:'Chakkar | Products'});
})

router.get('/ckSeries', function(req,res,next){
  res.render('products/ckSeries', {title:'CK Series | Products'});
})

router.get('/giftBox', function(req,res,next){
  res.render('products/giftBox', {title:'Gift Box | Products'});
})

router.get('/newEliteSeries', function(req,res,next){
  res.render('products/newEliteSeries', {title:'New Elite Series | Products'});
})

router.get('/sparklers', function(req,res,next){
  res.render('products/sparklers', {title:'New Elite Series | Products'});
})

router.get('/skyshootups', function(req,res,next){
  res.render('products/skyshootups', {title:'Sky Shootups | Products'});
})

router.get('/multishots', function(req,res,next){
  res.render('products/multishots', {title:'MultiShots | Products'});
})

router.get('/kidsZone', function(req,res,next){
  res.render('products/kidsZone', {title:'Kids Zone | Products'});
})


module.exports = router;
