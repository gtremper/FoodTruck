/**********

Schemas and database configuration. Connects to the database hosted at
MongoHQ

**********/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://gtremper:fessieisadog@paulo.mongohq.com:10082/FoodTrucks');

/** FOOD TRUCKS **/
var FoodTruckSchema = new Schema({
  name: {type: String, required: true},
  location: {type: [Number], index: '2d'},
  foods: String
});

exports.FoodTrucks = mongoose.model('FoodTrucks',FoodTruckSchema);