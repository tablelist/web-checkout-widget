/* =========================================================================
 * Dependencies
 * ========================================================================= */
//var newrelic = require('newrelic');
var config = require('./config/appConfig')[process.env.NODE_ENV || 'development']
var app = require('./config/expressConfig').configure(config);

console.log('ENV: ' + (process.env.NODE_ENV || 'development'));

// start server
app.listen(config.PORT, function() {
  console.log('Listening on port: ' + config.PORT);
});

/* =========================================================================
 * Exorts
 * ========================================================================= */
module.exports = app;
