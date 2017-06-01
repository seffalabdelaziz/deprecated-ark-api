/**
* Created by vrlc92 on 5/5/16.
*/

const options = require('./options.js');
const Api = require('./api.js');

const Signature = {};

Signature.addSecondSignature = function (secret, secondSecret, callback) {
  Api.put({
    url: `${options.url}/api/signatures`,
    form: {
      secret,
      secondSecret,
    },
    json: true,
  }, callback);
};

module.exports = Signature;
