'use strict';

angular.module('FoodTruckApp')
  .controller('MapCtrl', ['$scope', '$window', 'foodtruck', function($scope, $window, foodtruck){
    //Initial settings for google maps
    google.maps.visualRefresh = true;

    $scope.mapCenter = {
      latitude: 37.76121562849642,
      longitude: -122.43473052978516
    };

    $scope.mapZoom = 12;

    $scope.clickedLatitude = null;
    $scope.clickedLongitude = null;

    $scope.numTrucks = 5;

    function updateLocChange(){
      foodtruck.getNearbyTrucks($scope.clickedLongitude,$scope.clickedLatitude,$scope.numTrucks);
    }
    //run function when either value changes
    $scope.$watch('clickedLongitude + clickedLatitude + numTrucks',updateLocChange);

    //Bind service to scope to access currentTrucks
    $scope.foodtruck = foodtruck;

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
