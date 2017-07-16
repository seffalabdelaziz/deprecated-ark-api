const network = require('./network.js');
const Api = require('./api.js');

const Account = {};

Account.openAccount = function (secretKey, callback) {
  Api.post({
    url: `${network.node}/api/accounts/open`,
    form: {
      secret: secretKey,
    },
    json: true,
  }, callback);
};

Account.getBalance = function (address, callback) {
  Api.get({
    url: `${network.node}/api/accounts/getBalance`,
    qs: {
      address,
    },
    json: true,
  }, callback);
};

Account.getPublicKey = function (address, callback) {
  Api.get({
    url: `${network.node}/api/accounts/getPublicKey`,
    qs: {
      address,
    },
    json: true,
  }, callback);
};

Account.generatePublicKey = function (secretKey, callback) {
  Api.post({
    url: `${network.node}/api/accounts/generatePublicKey`,
    form: {
      secret: secretKey,
    },
    json: true,
  }, callback);
};

Account.getAccount = function (address, callback) {
  Api.get({
    url: `${network.node}/api/accounts`,
    qs: {
      address,
    },
    json: true,
  }, callback);
};

Account.getVotes = function (address, callback) {
  Api.get({
    url: `${network.node}/api/accounts/delegates`,
    qs: {
      address,
    },
    json: true,
  }, callback);
};

Account.vote =
function (secretKey, secondSecretKey, publicKey, delegates, callback) {
  const data = {
    secret: secretKey,
    delegates,
  };

  if (secondSecretKey) {
    data.secondSecret = secondSecretKey;
  }

  if (publicKey) {
    data.publicKey = publicKey;
  }

  Api.put({
    url: `${network.node}/api/accounts/delegates`,
    form: data,
    json: true,
  }, callback);
};

module.exports = Account;
