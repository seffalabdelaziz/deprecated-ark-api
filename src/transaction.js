const ark = require("arkjs");
const Network = require("./network.js");
const Api = require("./api.js");
const Init = require("./init.js");

const Transaction = {};

Transaction.getTransactionsList = function (qs, callback) {
  Api.get({
    path: "/api/transactions",
    qs,
    json: true,
  }, callback);
};

Transaction.createTransaction = (passphrase, recipientAddr, amount, vendorField, secondPassphrase) => {
    var transaction = ark.transaction.createTransaction(recipientAddr, amount, vendorField, passphrase, secondPassphrase);
    return transaction;
};

Transaction.sendTransactions = (transactions, callback) => {
    if(!Init.initP)
    {
        callback(true, false, {success: false, msg: "Peers not initialized"});
        return;
    }

    initP.then(() => {
        var config = {
            path: "/peer/transactions",
            body: { transactions: transactions },
            json: true,
            headers: {
                "Content-Type": "application/json",
                "os": "node-arkjs",
                "version": "0.3.0",
                "port": 1,
                "nethash": netHash
            }
        };

        Api.post(config, callback);

        Network.seeds.forEach((peer) => Api.post(config));
    });

};

Transaction.getTransaction = function (transactionId, callback) {
  Api.get({
    path: "/api/transactions/get",
    qs: {
      id: transactionId,
    },
    json: true,
  }, callback);
};

Transaction.getUnconfirmedTransaction = function (transactionId, callback) {
  Api.get({
    path: "/api/transactions/unconfirmed/get",
    qs: {
      id: transactionId,
    },
    json: true,
  }, callback);
};

Transaction.getUnconfirmedTransactions = function (callback) {
  Api.get({
    path: "/api/transactions/unconfirmed",
    json: true,
  }, callback);
};

module.exports = Transaction;
