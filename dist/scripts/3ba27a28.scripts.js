"use strict";angular.module("FoodTruckApp",["google-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html"}).when("/map",{templateUrl:"views/map.html",controller:"MapCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("FoodTruckApp").controller("MapCtrl",["$scope","$window","foodtruck",function(a,b,c){function d(){c.getNearbyTrucks(a.clickedLongitude,a.clickedLatitude,a.numTrucks)}google.maps.visualRefresh=!0,a.mapCenter={latitude:37.76121562849642,longitude:-122.43473052978516},a.mapZoom=12,a.clickedLatitude=null,a.clickedLongitude=null,a.numTrucks=5,a.$watch("clickedLongitude + clickedLatitude + numTrucks",d),a.foodtruck=c,a.getCurrentLocation=function(){return b.navigator?(b.navigator.geolocation.getCurrentPosition(function(b){a.clickedLongitude=b.coords.longitude,a.clickedLatitude=b.coords.latitude}),void 0):(alert("Sorry, your browser doesn't support geolocation"),void 0)}}]),angular.module("FoodTruckApp").factory("foodtruck",["$http",function(a){var b={};return b.currentTrucks=[],b.getNearbyTrucks=function(c,d,e){var f={longitude:c,latitude:d,number:e};a.get("/api/findFoodtrucks",{params:f}).success(function(a){b.currentTrucks=[],angular.forEach(a,function(a){var c={name:a.name,longitude:a.location[0],latitude:a.location[1]};b.currentTrucks.push(c)})}).error(function(){console.log("ERROR GETTING TRUCKS")})},b}]);