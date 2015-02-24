/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var passport = require('passport');
var jwt = require('jwt-simple');

module.exports = function(app) {
  // var login = require('./api/login');
  // login.init(app);

  // Insert routes below
  app.use('/api/stats', require('./api/stats'));
  app.use('/api/admin', require('./api/admin'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
