var Express = require('express');
var router = Express.Router();
var db = require('../../models/');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

router.get('/api/hotels', function(req, res, next) {
  Hotel.findAll()
  .then(function(hotels) {
    res.json(hotels)
  }).catch(next)
});

router.get('/api/restaurants', function(req, res, next) {
  Restaurant.findAll()
  .then(function(restaurant) {
    res.json(restaurant)
  }).catch(next)
});

router.get('/api/activities', function(req, res, next) {
  Activity.findAll()
  .then(function(activity) {
    res.json(activity)
  }).catch(next)
});



module.exports = router;
