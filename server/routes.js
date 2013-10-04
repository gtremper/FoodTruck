var FoodTrucks = require('./models').FoodTrucks,
    _ = require('underscore'),
    http = require('http')


/***** JSON API *****/

/*
Returns closest 'num' food trucks to 'target' location
*/
exports.findFoodtrucks = function(req,res){
  var num = req.query.number;
  var long = parseFloat(req.query.longitude);
  var lat = parseFloat(req.query.latitude);
  console.log('foodtrucs go!');
  console.log(req.query);
  console.log('longitude: '+long);
  console.log('latitude: '+lat);
  FoodTrucks
    .find({location: {$nearSphere: [long,lat]}})
    .limit(num)
    .exec(function(err,trucks){
      console.log('Went to database');
      console.log(err);
      if (err) return res.send(500, {error: 'database error'});
      return res.json(trucks);
    });
}

/*
Load foodtruck data into database
*/
exports.loadData = function(){
  http.get('http://data.sfgov.org/resource/rqzj-sfat.json?$select=applicant,longitude,latitude',function(res){
    console.log('Got response');
    var data = '';

    res.on('data', function(chunk){
      data += chunk;
    });

    res.on('end', function(){
      var obj = JSON.parse(data);
      // Remove trucks that don't have location data
      var foodtrucks = _.filter(obj, function(food){
        return Object.keys(food).length === 3;
      });
      // Add each truck to the database
      _.each(foodtrucks, function(food){
        var long = parseFloat(food.longitude);
        var lat = parseFloat(food.latitude);
        console.log('food');
        new FoodTrucks({
          'name': food.applicant,
          'location': [long, lat]
        }).save(function(err){
          if (err) console.log("ERROR");
          else console.log('SAVE')
        });
      });
    });
  });
}