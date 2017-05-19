/**
* Created by vrlc92 on 5/5/16.
*/

const options = require('./options.js');
const Api = require('./api.js');

const Loader = {};

Loader.getLoadingStatus = function (callback) {
  Api.get({
    url: `${options.url}/api/loader/status`,
    json: true,
  }, callback);
};

Loader.getSynchronisationStatus = function (callback) {
  Api.get({
    url: `${options.url}/api/loader/status/sync`,
    json: true,
  }, callback);
};

module.exports = Loader;
