const options = require('./options.js');
const Api = require('./api.js');

const MultiSignature = {};

MultiSignature.getPendingMultiSignatureTransactions =
function (publicKey, callback) {
  Api.get({
    url: `${network.node}/api/multisignatures/pending`,
    qs: {
      publicKey,
    },
    json: true,
  }, callback);
};

MultiSignature.createMultiSignatureAccount =
function (secret, lifetime, min, keysgroup, callback) {
  Api.get({
    url: `${network.node}/api/multisignatures`,
    method: 'PUT',
    json: {
      secret,
      lifetime,
      min,
      keysgroup,
    },
  }, callback);
};

MultiSignature.signTransaction =
function (secretKey, publicKey, transactionId, callback) {
  const data = {
    secret: secretKey,
    transactionId,
  };

  if (publicKey) {
    data.publicKey = publicKey;
  }

  Api.post({
    url: `${network.node}/api/multisignatures/sign`,
    form: data,
    json: true,
  }, callback);
};

MultiSignature.getAccountsOfMultisignature = function (publicKey, callback) {
  Api.get({
    url: `${network.node}/api/multisignatures/accounts`,
    qs: {
      publicKey,
    },
    json: true,
  }, callback);
};

module.exports = MultiSignature;
