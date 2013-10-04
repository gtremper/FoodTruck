'use strict';

angular.module('FoodTruckApp').factory('foodtruck', ['$http', function($http){

  var foodtruck = {}

  //List of current trucks displayed
  foodtruck.currentTrucks = [];

  //Update list of current trucks with new location
  foodtruck.getNearbyTrucks = function (longitude,latitude,number) {
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
          'latitude': item.location[1]
        };
        foodtruck.currentTrucks.push(truck);
      });
    })
    .error(function(data){
      console.log("ERROR GETTING TRUCKS")
    });
  }

  return foodtruck;
}]);
