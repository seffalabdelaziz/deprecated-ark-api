/**
* Created by vrlc92 on 7/28/16.
*/
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["config"] }]*/
const request = require('request');

const Api = {};

Api.get = function (config, callback) {
  Api.request(config, callback);
};

Api.post = function (config, callback) {
  config.method = 'POST';
  Api.request(config, callback);
};

Api.put = function (config, callback) {
  config.method = 'PUT';
  Api.request(config, callback);
};

Api.request = function (config, callback) {
  request(
    config,
    (error, response, body) => {
      if (error) {
        if (callback) {
          callback(error, false, null);
        }
      } else if (callback) {
        callback(null, body.success, body);
      }
    },
  );
};

module.exports = Api;
