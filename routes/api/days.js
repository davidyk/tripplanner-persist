var Express = require('express');
var router = Express.Router();
var db = require('../../models/');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');




//                *** DAYS ***
// CREATE - make a new day
router.post('/api/days', function(req, res, next) {

});



// READ
// -Get a list of all the days
router.get('/api/days', function(req, res, next) {
  console.log("Get all days");

});


// UPDATE (see ATTRACTIONS)

// -Get a specific day
router.get('/api/days/:id', function(req, res, next) {
});

// DELETE - a specific day
router.delete('/api/days/:id', function(req, res, next) {
});



//                *** ATTRACTIONS ***

//CREATE
router.post('/api/days/:day/:type/:name', function(req, res, next) {
});



//READ - Get all of a specific type of attraction for a day
router.get('/api/days/:day/:type/', function(req, res, next) {
});


//UPDATE - none


//Delete
router.delete('/api/days/:day/:type/:name', function(req, res, next) {


});



// router.get('/api/restaurants', function(req, res, next) {
//   Restaurant.findAll()
//   .then(function(restaurant) {
//     res.json(restaurant)
//   }).catch(next)
// });

// router.get('/api/activities', function(req, res, next) {
//   Activity.findAll()
//   .then(function(activity) {
//     res.json(activity)
//   }).catch(next)
// });



module.exports = router;
