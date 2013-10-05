'use strict';

/*********

This is the controller for the 'Maps' page. It mostly just sets
configurations for the google map and also notifies the foodtruck
service when the user clicks the map or uses gps

*********/

angular.module('FoodTruckApp')
  .controller('MapCtrl', ['$scope', '$window', 'foodtruck', function($scope, $window, foodtruck){
    //Initial settings for google maps
    google.maps.visualRefresh = true;

    //Bind service to scope to access currentTrucks
    $scope.foodtruck = foodtruck;

    //Configurations for the map
    $scope.mapCenter = { //san fransisco
      latitude: 37.76121562849642,
      longitude: -122.43473052978516
    };

    $scope.mapZoom = 12;
    $scope.clickedLatitude = null;
    $scope.clickedLongitude = null;

    $scope.numTrucks = 20;

    //run function when either value changes
    //also check valid input for numTrucks
    function updateLocChange(){
      var num = $scope.numTrucks
      if (typeof num==='number' && (num%1)===0){
        foodtruck.getNearbyTrucks($scope.clickedLongitude, $scope.clickedLatitude, num);
      }
    }
    $scope.$watch('clickedLongitude + clickedLatitude + numTrucks',updateLocChange);


    //Manage current location geolocation
    $scope.getCurrentLocation = function(){
      if (!$window.navigator){
        alert('Sorry, your browser doesn\'t support geolocation');
        return;
      }
      $window.navigator.geolocation.getCurrentPosition(function(position){
        $scope.clickedLongitude = position.coords.longitude;
        $scope.clickedLatitude = position.coords.latitude;
      });
    };
  
  
  }]);
