'use strict';
/* global $ attractionModule hotels restaurants activities */

/**
 * This module holds collection of enhanced attraction objects which can be
 * easily looked up by type and id. It is primarily used when someone clicks
 * to add an attraction in the `options` module.
 */

var attractionsModule = (function () {

var enhanced;

var getHotels = $.get('/api/hotels');
  var getRestaurants = $.get('/api/restaurants');
  var getActivities = $.get('/api/activities');


  Promise.all([getHotels, getRestaurants, getActivities])
  .then(function(returnValues) {
    var hotels = returnValues[0]
    var restaurants = returnValues[1]
    var activities = returnValues[2]

    // application state

    enhanced = {
      hotels: hotels.map(attractionModule.create),
      restaurants: restaurants.map(attractionModule.create),
      activities: activities.map(attractionModule.create),
    }

  })

  .catch(console.error);





  // private helper methods (only available inside the module)

  function findById (array, id) {
    return array.find(function (el) {
      return +el.id === +id;
    });
  }

  // globally accessible module methods (available to other modules)

  var publicAPI = {

    getByTypeAndId: function (type, id) {
      if (type === 'hotel') return findById(enhanced.hotels, id);
      else if (type === 'restaurant') return findById(enhanced.restaurants, id);
      else if (type === 'activity') return findById(enhanced.activities, id);
      else throw Error('Unknown attraction type');
    },

    getEnhanced: function (databaseAttraction) {
      var type = databaseAttraction.type;
      var id = databaseAttraction.id;
      var found = publicAPI.getByTypeAndId(type, id);
      if (found) return found;
      throw Error('enhanced version not found', databaseAttraction);
    }

  };

  return publicAPI;

}());
