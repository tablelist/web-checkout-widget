/* =========================================================================
 * Dependencies
 * ========================================================================= */
var _ = require('underscore');

/* =========================================================================
 * App Config Settings
 * ========================================================================= */
var defaultSettings = {
  PORT: process.env.PORT || 2001,
  BUILD_DIR: 'release',
  VENUE_SLUG: 'storyville'
};

var production = _.extend(_.extend({}, defaultSettings), {
  ENV: 'production',
  DOMAIN: 'https://www.tablelist.com'
});

var development = _.extend(_.extend({}, defaultSettings), {
  ENV: 'development',
  DOMAIN: 'https://www-dev.tablelist.com'
});

var local = _.extend(_.extend({}, defaultSettings), {
  ENV: 'local'
});

/* =========================================================================
 * Exports
 * ========================================================================= */
module.exports = {
  production: production,
  development: development,
  local: local
};
