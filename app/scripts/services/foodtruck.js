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
    // Ignore invalid input
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
      var A = 65; //Char code for 'A'
      angular.forEach(data, function(item,index){
        //Calculate letter label
        var letter;
        if (index>25){
          var first = Math.floor(index/26) - 1;
          var second = index % 26;
          letter = String.fromCharCode(A + first) + String.fromCharCode(A + second);
        } else {
          letter = String.fromCharCode(A + index);
        }

        var truck = {
          'name': item.name,
          'longitude': item.location[0],
          'latitude': item.location[1],
          'foods': item.foods,
          'icon': 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+ letter +'|00FF00|000000'
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
