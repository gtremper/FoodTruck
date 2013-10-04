var express = require('express'),
    path = require('path'),
    routes = require('./server/routes')

var app = module.exports = express();

// all environments
app.configure(function(){
  app.set('port', process.env.PORT || 8000);
  app.use(express.compress());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({secret: 'keyboard cat'}));
  //app.use(express.static(path.join(__dirname, '.tmp')));
  //app.use(express.static(path.join(__dirname, 'app')));
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use(app.router);
});

/** Initialize foodtruck data in database */
//routes.loadData();


/** JSON API **/
app.get('/api/findFoodtrucks', routes.findFoodtrucks)


/** Start server **/
app.listen(app.get('port'),function(){
  console.log('Express server listening on port ' + app.get('port'));
});