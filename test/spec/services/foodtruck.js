'use strict';

describe('Service: foodtruck', function () {

  // load the service's module
  beforeEach(module('FoodTruckApp'));

  // instantiate service
  var foodtruck;
  beforeEach(inject(function (_foodtruck_) {
    foodtruck = _foodtruck_;
  }));

  it('should do something', function () {
    expect(!!foodtruck).toBe(true);
  });

});
