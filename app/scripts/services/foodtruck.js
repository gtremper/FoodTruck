'use strict';

/*********

This service manages all foodtruck data interaction. It queries the server
for nearby foodtrucks and holds the list of current foodtrucks listed on
the map

*********/

angular.module('FoodTruckApp').factory('foodtruck', ['$http', function($http){

  var foodtruck = {};

  //List of current trucks displayed
  foodtruck.currentTrucks = [];

  //Update list of current trucks with new location
  foodtruck.getNearbyTrucks = function (longitude,latitude,number) {
    if (!longitude || !latitude){
      return;
    }

    var query = {
      'longitude': longitude,
      'latitude': latitude,
      'number': number
    };

    $http.get('/api/findFoodtrucks', {params: query})
    .success(function(data){
      foodtruck.currentTrucks = [];
      angular.forEach(data, function(item){
        var truck = {
          'name': item.name,
          'longitude': item.location[0],
          'latitude': item.location[1],
          'foods': item.foods
        };
        foodtruck.currentTrucks.push(truck);
      });
    })
    .error(function(){
      console.log('ERROR GETTING TRUCKS');
    });
  };

  return foodtruck;
}]);
