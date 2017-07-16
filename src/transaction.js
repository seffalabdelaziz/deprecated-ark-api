const network = require('./network.js');
const Api = require('./api.js');
const Init = require('./init.js');

const Transaction = {};

Transaction.getTransactionsList = function (qs, callback) {
  Api.get({
    url: `${network.node}/api/transactions`,
    qs,
    json: true,
  }, callback);
};

Transaction.sendTransaction =
function (secretKey, secondSecretKey, publicKey, amount, recipientId, callback) {
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

  if(!Init.initP)
  {
    callback(true, false, {success: false, msg: "Peers not initialized"});
    return;
  }

  Init.initP.then(() => {
    var peers = options.peers;
    Api.get({
      url: `${network.node}/api/transactions`,
      method: 'PUT',
      json: data,
    }, callback);

    //Also broadcast tx to other peers just in case
    console.log(`Also broadcasting to ${peers.length} peers`)
    peers.forEach((peer) => {
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
    url: `${network.node}/api/transactions/get`,
    qs: {
      id: transactionId,
    },
    json: true,
  }, callback);
};

Transaction.getUnconfirmedTransaction = function (transactionId, callback) {
  Api.get({
    url: `${network.node}/api/transactions/unconfirmed/get`,
    qs: {
      id: transactionId,
    },
    json: true,
  }, callback);
};

Transaction.getUnconfirmedTransactions = function (callback) {
  Api.get({
    url: `${network.node}/api/transactions/unconfirmed`,
    json: true,
  }, callback);
};

module.exports = Transaction;
