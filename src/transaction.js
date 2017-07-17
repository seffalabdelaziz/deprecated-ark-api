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

Transaction.createTransaction = (passPhrase, recipientAddr, amount, vendorField, secondPassphrase) => {
    var transaction = ark.transaction.createTransaction(recipientAddr, amount, vendorField, passPhrase, secondPassphrase);
    return transaction;
};

Transaction.createDelegateTransaction = (passPhrase, delegateName, secondPass) => {
    var transaction = ark.delegate.createDelegate(passPhrase, delegateName, secondPass);
    return transaction
};

Transaction.createSecondSignatureTransaction = (passPhrase, secondPass) => {
    var transaction = ark.signature.createTransaction(passPhrase, secondPass);
    return transaction
};

Transaction.createVoteTransaction = (passPhrase, votes, secondPass) => {
    var transaction = ark.vote.createVote(passPhrase, votes, secondPass);
    return transaction
};

Transaction.sendTransactions = (transactions, callback) => {
    if(!Init.initP)
    {
        callback(true, false, {success: false, msg: "Peers not initialized"});
        return;
    }

    Init.initP.then(() => {
        var params = {
            path: "/peer/transactions",
            body: { transactions: transactions },
            json: true,
            headers: {
                "Content-Type": "application/json",
                "os": "node-arkjs",
                "version": "0.3.0",
                "port": 1,
                "nethash": Network.hash
            }
        };

        Api.post(params, callback);
        
        broadcastTransactions(params, Network.seeds);
        broadcastTransactions(params, Network.peers);
    });

};

var broadcastTransactions = (params, nodes) => {
    nodes.forEach((node) => {
        params.url = `http://${node}/peer/transactions`;
        Api.post(params);
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
