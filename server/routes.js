var FoodTrucks = require('./models').FoodTrucks

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
  
}