const Account = require("./account.js");
const Loader = require("./loader.js");
const Transaction = require("./transaction.js");
const Peer = require("./peer.js");
const Block = require("./block.js");
const Delegate = require("./delegate.js");
const Init = require("./init.js")

module.exports = {
    // Init
    init: Init.init,

    // Account
    getBalance: Account.getBalance,
    getPublicKey: Account.getPublicKey,
    getAccount: Account.getAccount,
    getVotes: Account.getVotes,
    vote: Account.vote,

    // Loader
    getLoadingStatus: Loader.getLoadingStatus,
    getSynchronisationStatus: Loader.getSynchronisationStatus,

    // Transaction
    getTransactionsList: Transaction.getTransactionsList,
    getTransaction: Transaction.getTransaction,
    createTransaction: Transaction.createTransaction,
    createDelegateTransaction: Transaction.createDelegateTransaction,
    createSecondSignatureTransaction: Transaction.createSecondSignatureTransaction,
    createVoteTransaction: Transaction.createVoteTransaction,
    sendTransactions: Transaction.sendTransactions,
    getUnconfirmedTransaction: Transaction.getUnconfirmedTransaction,
    getUnconfirmedTransactions: Transaction.getUnconfirmedTransactions,

    // Peer
    getPeersList: Peer.getPeersList,
    getPeer: Peer.getPeer,
    getPeerVersion: Peer.getPeerVersion,

    // Block
    getBlock: Block.getBlock,
    getBlocks: Block.getBlocks,
    getBlockchainFee: Block.getBlockchainFee,
    getBlockchainHeight: Block.getBlockchainHeight,
    getForgedByAccount: Block.getForgedByAccount,

    // Delegate
    getDelegates: Delegate.getDelegates,
    getDelegate: Delegate.getDelegate,
    getDelegateByPublicKey: Delegate.getByPublicKey,
    getDelegateByUsername: Delegate.getByUsername,
    getVoters: Delegate.getVoters
};
