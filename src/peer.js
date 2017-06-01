/**
* Created by vrlc92 on 5/5/16.
*/

const options = require('./options.js');
const Api = require('./api.js');

const Peer = {};

Peer.getPeersList = function (qs, callback) {
  Api.get({
    url: `${options.url}/api/peers`,
    qs,
    json: true,
  }, callback);
};

Peer.getPeer = function (ip, port, callback) {
  Api.get({
    url: `${options.url}/api/peers/get`,
    qs: {
      ip,
      port,
    },
    json: true,
  }, callback);
};

Peer.getPeerVersion = function (callback) {
  Api.get({
    url: `${options.url}/api/peers/version`,
    json: true,
  }, callback);
};

module.exports = Peer;
