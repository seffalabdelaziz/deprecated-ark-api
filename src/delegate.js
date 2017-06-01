/**
* Created by vrlc92 on 5/4/16.
*/

const options = require('./options.js');
const Api = require('./api.js');

const Delegate = {};

Delegate.enableDelegateOnAccount = function (
  secretKey, secondSecretKey, username, callback) {
  const data = {
    secret: secretKey,
    username,
  };

  if (secondSecretKey) {
    data.secondSecret = secondSecretKey;
  }

  Api.put({
    url: `${options.url}/api/delegates`,
    form: data,
    json: true,
  }, callback);
};

Delegate.getDelegates = function (qs, callback) {
  Api.get({
    url: `${options.url}/api/delegates`,
    qs,
    json: true,
  }, callback);
};

Delegate.getByUsername = function (username, callback) {
  Api.get({
    url: `${options.url}/api/delegates/get`,
    qs: {
      username,
    },
    json: true,
  }, callback);
};

Delegate.getByPublicKey = function (publicKey, callback) {
  Api.get({
    url: `${options.url}/api/delegates/get`,
    qs: {
      publicKey,
    },
    json: true,
  }, callback);
};

Delegate.getDelegate = Delegate.getByUsername;

Delegate.getVoters = function (publicKey, callback) {
  Api.get({
    url: `${options.url}/api/delegates/voters`,
    qs: {
      publicKey,
    },
    json: true,
  }, callback);
};

Delegate.enableForging = function (secretKey, callback) {
  Api.post({
    url: `${options.url}/api/delegates/forging/enable`,
    form: {
      secret: secretKey,
    },
    json: true,
  }, callback);
};

Delegate.disableForging = function (secretKey, callback) {
  Api.post({
    url: `${options.url}/api/delegates/forging/disable`,
    form: {
      secret: secretKey,
    },
    json: true,
  }, callback);
};

module.exports = Delegate;
