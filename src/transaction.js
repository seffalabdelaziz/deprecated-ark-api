/**
* Created by vrlc92 on 5/5/16.
*/

const options = require('./options.js');
const Api = require('./api.js');
const Init = require('./init.js');

const Transaction = {};

Transaction.getTransactionsList = function (qs, callback) {
  Api.get({
    url: `${options.url}/api/transactions`,
    qs,
    json: true,
  }, callback);
};

Transaction.sendTransaction =
function (secretKey, secondSecretKey, publicKey, amount, recipientId, callback) { // eslint-disable-line
  const data = {
    secret: secretKey,
    amount,
    recipientId,
  };

  if (secondSecretKey) {
    data.secondSecret = secondSecretKey;
  }

  if (publicKey) {
    data.publicKey = publicKey;
  }

  Init.initP.then(() => {
    var peers = options.peers;
    Api.get({
      url: `${options.url}/api/transactions`,
      method: 'PUT',
      json: data,
    }, callback);

    //Also broadcast tx to 15 other peers just in case
    peers.slice(0, 16).forEach((peer) => {
      Api.get({
        url: `${peer.ip}/api/transactions`,
        method: 'PUT',
        json: data,
      });
    });
  }).catch((err) => "Error initializing peers"); 
};

Transaction.getTransaction = function (transactionId, callback) {
  Api.get({
    url: `${options.url}/api/transactions/get`,
    qs: {
      id: transactionId,
    },
    json: true,
  }, callback);
};

Transaction.getUnconfirmedTransaction = function (transactionId, callback) {
  Api.get({
    url: `${options.url}/api/transactions/unconfirmed/get`,
    qs: {
      id: transactionId,
    },
    json: true,
  }, callback);
};

Transaction.getUnconfirmedTransactions = function (callback) {
  Api.get({
    url: `${options.url}/api/transactions/unconfirmed`,
    json: true,
  }, callback);
};

module.exports = Transaction;
