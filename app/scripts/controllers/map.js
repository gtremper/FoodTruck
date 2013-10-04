'use strict';

angular.module('FoodTruckApp')
  .controller('MapCtrl', ['$scope', 'foodtruck', function($scope, foodtruck){
    //Initial settings for google maps
    google.maps.visualRefresh = true;

    $scope.mapCenter = {
      latitude: 37.76121562849642,
      longitude: -122.43473052978516
    };

    $scope.mapZoom = 12;

    $scope.clickedLatitude = null;
    $scope.clickedLongitude = null;

    function updateLocChange(){
      foodtruck.getNearbyTrucks($scope.clickedLongitude,$scope.clickedLatitude,5);
    }
    //run function when either value changes
    $scope.$watch('clickedLongitude + clickedLatitude',updateLocChange);

    //Bind service to scope to access currentTrucks
    $scope.foodtruck = foodtruck;

  
  
  }]);
