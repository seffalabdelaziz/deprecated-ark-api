const Account = require('./account.js');
const Loader = require('./loader.js');
const Transaction = require('./transaction.js');
const Peer = require('./peer.js');
const Block = require('./block.js');
const Signature = require('./signature.js');
const Delegate = require('./delegate.js');
const MultiSignature = require('./multi_signature.js');
const Init = require('./init.js')

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
    sendTransaction: Transaction.sendTransaction,
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

    // Signature
    addSecondSignature: Signature.addSecondSignature,

    // Delegate
    enableDelegateOnAccount: Delegate.enableDelegateOnAccount,
    getDelegates: Delegate.getDelegates,
    getDelegate: Delegate.getDelegate,
    getDelegateByPublicKey: Delegate.getByPublicKey,
    getDelegateByUsername: Delegate.getByUsername,
    getVoters: Delegate.getVoters,
    enableForging: Delegate.enableForging,
    disableForging: Delegate.disableForging,

    // MultiSignature
    getPendingMultiSignatureTransactions: MultiSignature.getPendingMultiSignatureTransactions,
    createMultiSignatureAccount: MultiSignature.createMultiSignatureAccount,
    signTransaction: MultiSignature.signTransaction,
    getAccountsOfMultisignature: MultiSignature.getAccountsOfMultisignature,
};
