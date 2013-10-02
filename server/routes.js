var FoodTrucks = require('./models').FoodTrucks,
    _ = require('underscore'),
    http = require('http')

/***** Index and views *****/

exports.index = function(req,res){
  res.sendfile('./app/index.html');
};

exports.views = function(req,res){
  var name = req.params.name;
  res.sendfile('views/'+name);
};


/***** JSON API *****/

/*
Returns closest 'num' food trucks to 'target' location
*/
exports.foodtrucks = function(req,res){
  var num = req.body.num;
  var target = req.body.target;
}

/*
Load foodtruck data into database
*/
exports.loaddata = function(){
  http.get('http://data.sfgov.org/resource/rqzj-sfat.json?$select=applicant,longitude,latitude',function(res){
    console.log('Got response');
    var data = '';

    res.on('data', function(chunk){
      data += chunk;
    });

    res.on('end', function(){
      var obj = JSON.parse(data);
      console.log("DATA");
      var filtered = _.filter(obj, function(food){
        return Object.keys(food).length === 3;
      });
      console.log(filtered);
    });
  });
}