const network = require('./network.js');
const Api = require('./api.js');

const Signature = {};

Signature.addSecondSignature = function (secret, secondSecret, callback) {
  Api.put({
    url: `${network.node}/api/signatures`,
    form: {
      secret,
      secondSecret,
    },
    json: true,
  }, callback);
};

module.exports = Signature;
