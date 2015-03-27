Food Truck Finder
=================

Demo app that can be used to find foodtrucks in SF.

The data used is from https://data.sfgov.org/Permitting/Mobile-Food-Facility-Permit/rqzj-sfat

Project Info
------------
I used a stack with angularjs, nodejs, expressjs, and mongodb. Angularjs made it easy to update my list of foodtrucks with 2-way databinding. I stored all of the foodtruck data in my own mongodb database so I could use its geolocation-based queries. The database is hosted in a free account at MongoHQ, so it's a little slow.

I also used yeomann/bower/grunt to scaffold my application, so the code I wrote can primarily be found in the 'app' and 'server' directories. The minified deployment version can be found in the 'dist' directory

Installation
-----------
To download all of the dependencies, run
* npm install
* bower install

Live demo
---------
A live demo can be viewed [here](http://sf-foodtrucks.herokuapp.com/)

Github
------
View the repo [here](https://github.com/gtremper/FoodTruck)

Other cool stuff
----------------

You can see other projects I've worked on on my [github profile](https://github.com/gtremper)

[Here's](https://github.com/gtremper/MoneyManage) a group expense-spliting webapp I made with angular and node. [Demo](http://money-manage.herokuapp.com/)

[Here's](https://github.com/gtremper/Seam_Carving) a cool seam carver a did in javascript. [Demo.](http://inst.eecs.berkeley.edu/~cs199-ap/)

A [python wrapper](https://github.com/gtremper/LoanInvestor) I wrote for the LendingClub API.
