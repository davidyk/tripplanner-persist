var Express = require('express');
var router = Express.Router();
var db = require('../../models/');
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day')



//                *** DAYS ***
// CREATE - make a new day
router.post('/api/days/:id', function(req, res, next) {
  Day.create({
    number: req.params.id
  });
  res.sendStatus(200);
});



// READ
// -Get a list of all the days
router.get('/api/days', function(req, res, next) {
  Day.findAll({ include: [{model: Hotel}, {model: Activity}, {model: Restaurant}]})
  .then(function(days) {
    res.send(days);
  })
  .catch(next);
});


// UPDATE (see ATTRACTIONS)

// -Get a specific day
router.get('/api/days/:id', function(req, res, next) {
  Day.findOne({
    where: {
      number: req.params.id
    }
  })
  .then(function(day){
    console.log("day", day);
    res.send(day)
  })
  .catch(next)
});

// DELETE - a specific day
router.delete('/api/days/:id', function(req, res, next) {
  Day.destroy({
      where: {
        number: req.params.id
      }
  })
  .then(function(day){
    console.log("day", day)
    res.sendStatus(200);
  })


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
