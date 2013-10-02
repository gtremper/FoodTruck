'use strict';

angular.module('FoodTruckApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    google.maps.visualRefresh = true;
    $scope.center = {
      latitude: 47,
      longitude: -122
    };

    $scope.markClick = false;
    $scope.zoom = 13;
    $scope.fit=true;
  
  
  }]);
