# arkjs-wrapper
A Node.JS module which provides an wrapper for the [Ark API] based off the deprecated ark-api javascript wrapper.
This module includes improvements to the original ark-api module and is capable of creating and sending transactions properly by wrapping calls to arkjs.

## Installation
Add the following dependency to your ```package.json```
```js
"arkjs-wrapper": "git://github.com/eugeneli/arkjs-wrapper"
```


## Table of contents
- [Initialization](#initialization)
- [Accounts](#accounts)
- [Transactions](#transactions)
- [Peers](#peers)
- [Blocks](#blocks)
- [Signatures](#signatures)
- [Delegates](#delegates)
- [Multi-Signature](#multi-signature)

## Initialization
Before you begin, choose a network to initialize a list of nodes in that network
```js
var arkApi = require("arkjs-wrapper");
var network = "main" //or "dev"
arkApi.init(network);
```


## Accounts
Account related API calls.

### Get balance
Get the balance of an account.

**Request**
```js
var arkApi = require("arkjs-wrapper")
arkApi.getBalance("Address of the account",
  function(error, success, response) {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "balance": Balance of account (Integer String),
  "unconfirmedBalance": "Unconfirmed balance of account (Integer String)"
}
```
### Get account public key
Get the public key of an account. If the account does not exist the API call will return an error.

**Request**
```js
var arkApi = require("arkjs-wrapper")
arkApi.getPublicKey("Address of the account",
  function(error, success, response) {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "publicKey": "Public key of account. (Hex String)"
}
```

### Get account
Returns account information of an address.

**Request**
```js
var arkApi = require("arkjs-wrapper")
arkApi.getAccount("Address of the account",
  function(error, success, response) {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "account": {
    "address": "Address of account. (String)",
    "unconfirmedBalance": "Unconfirmed balance of account. (String)",
    "balance": "Balance of account. (String)",
    "publicKey": "Public key of account. (Hex String)",
    "unconfirmedSignature": "If account enabled second signature, but it's still not confirmed. (0 or 1)",
    "secondSignature": "If account enabled second signature. (0 or 1)",
    "secondPublicKey": "Second signature public key. (Hex String)"
  }
}
```
### Get votes of account
Get votes by account address.

**Request**
```js
var arkApi = require("arkjs-wrapper")
arkApi.getVotes("Address of the account",
  function(error, success, response) {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "delegates": [
    {
        username: Delegate Name (String),
        address: Delegate Address (String),
        publicKey: Delegate public key (String),
        vote: Number of votes (Integer String),
        producedBlocks: Number of Blocks Produces (Integer),
        missedBlocks: Number of missed blocks (Integer),
        rate: Delegate rank (Integer)
        approval: Percent approval (float)
        productivity: Percent blocks forged (float)
    }
    ...
  ]
}
```

## Transactions
API calls related to transactions.

### Get list of transactions
Transactions list matched by provided parameters.

**Request**
```js
var arkApi = require("arkjs-wrapper")

var parameters = {
  "blockId": "Block id of transaction. (String)",
  "senderId": "Sender address of transaction. (String)",
  "recipientId": "Recipient of transaction. (String)",
  "limit": "Limit of transaction to send in response. Default: 20. Max: 50 (Integer number)",
  "offset": "Offset to load. (Integer number)",
  "orderBy": "Name of column to order. After column name must go 'desc' or 'asc' to choose order type. Example: orderBy=timestamp:desc (String)"
};

arkApi.getTransactionsList(parameters, function(error, success, response) {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "transactions": [
    {
        id: Transaction ID (String),
        blockid: Block ID (Integer String),
        type: Transaction type (Integer),
        timestamp: Seconds since genesis block (Integer),
        amount: Transaction amount (Integer)
        fee: Transaction fee (Integer),
        venderField: Vender field/Smartbridge (String),
        senderId: Sender address (String),
        recipientId: Recipient address (String),
        senderPublicKey: Sender public key (String),
        signature: Transaction signature (String),
        asset: Asset (Object),
        confirmations: Number of confirmations (Integer)
    }
    ...
  ]
}
```

### Create Transaction
Creates a transaction object to be sent

**Example**
```js
var arkApi = require("arkjs-wrapper")
var transaction = arkApi.createTransaction("Sender passphrase",
                      "Address of recipient",
                      "Amount to send in 10^8",
                      "Vender Field",
                      "Sender second passphrase (optional)");
console.log(transaction);
```

### Create Delegate Transaction
Creates a delegate registration transaction to be sent

**Example**
```js
var arkApi = require("arkjs-wrapper")
var transaction = arkApi.createDelegateTransaction("Passphrase",
                      "Delegate name",
                      "Second passphrase (optional)");
console.log(transaction);
```

### Create Second Signature Transaction
Creates a second signature transaction to be sent

**Example**
```js
var arkApi = require("arkjs-wrapper")
var transaction = arkApi.createSecondSignatureTransaction("Passphrase",
                      "Second passphrase");
console.log(transaction);
```

### Create Vote Transaction
Creates a vote transaction to be sent

**Example**
```js
var arkApi = require("arkjs-wrapper")
var transaction = arkApi.createVoteTransaction("Passphrase",
                      ["+58199578191950019299181920120128129"] //Array of vote strings
                      "Second passphrase");
console.log(transaction);
```

### Send transactions
Broadcasts an array of transactions to multiple nodes

**Example**
```js
var arkApi = require("arkjs-wrapper")
var transaction = arkApi.sendTransactions([Transactions array], (error, success, response) => {
    console.log(response);
});
```

**Response**
```js
{
    success: true,
    transactionIds: [
    "ID of transactions that went sent (String)",
    "ID of transactions that went sent (String)",
    "ID of transactions that went sent (String)",
    ...
    ]
}
```

### Get transaction
Transaction matched by id.

**Request**
```js
var arkApi = require("arkjs-wrapper")
arkApi.getTransaction("String of transaction (String)", function(error, success, response) {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "transaction": {Transaction Object}
}
```

### Get unconfirmed transaction
Get unconfirmed transaction by id.

**Request**
```js
var arkApi = require("arkjs-wrapper")
arkApi.getUnconfirmedTransaction("String of transaction (String)", function(error, success, response) {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "transaction": {Transaction Object}
}
```

### Get list of unconfirmed transactions
Get list of unconfirmed transactions.

**Request**
```js
var arkApi = require("arkjs-wrapper")
arkApi.getUnconfirmedTransactions(function(error, success, response) {
    console.log(response);
});
```

**Response**
```
{
    "success" : true,
    "transactions" : [list of transaction objects]
}
```

## Peers
Peers API.

### Get peers list
Get peers list by parameters.

**Request**
```js
var arkApi = require("arkjs-wrapper")
arkApi.getPeersList(function(error, success, response) {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "peers": [
    {
        ip: IP Address (String),
        port: Port number (Integer),
        version: Node version (String),
        errors: Errors (Integer),
        os: Operating System (String),
        height: Block height (Integer),
        status: Node status (String),
        delay: Ping (Integer)
    }
    ...
  ]
}
```

### Get peer
Get peer by ip and port

**Request**
```js
var arkApi = require("arkjs-wrapper")

arkApi.getPeer("ip: Ip of peer. (String)",
               "port: Port of peer. (Integer)",
               function(error, success, response) {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "peer": "peer object"
}
```

### Get peer version, build time
Get peer version and build time

**Request**
```js
var arkApi = require("arkjs-wrapper")
arkApi.getPeerVersion(function(err, success, response){
  console.log(response);
});
```

**Response**
```
{
  "success": true,
  "version": "version of Ark",
  "build": "time of build"
}
```

## Blocks
Blocks manage API.

### Get block
Get block by id.

```js
var arkApi = require("arkjs-wrapper")
arkApi.getBlock(function("id: Id of block", err, success, response){
  console.log(response);
});
```

**Response**
```
{
    "success": true,
    "block": {
        "id": "Id of block. String",
        "version": "Version of block. Integer",
        "timestamp": "Timestamp of block. Integer",
        "height": "Height of block. Integer",
        "previousBlock": "Previous block id. String",
        "numberOfRequests": "Not using now. Will be removed in 0.2.0",
        "numberOfTransactions": "Number of transactions. Integer",
        "numberOfConfirmations": "Not using now.",
        "totalAmount": "Total amount of block. Integer",
        "totalFee": "Total fee of block. Integer",
        "payloadLength": "Payload length of block. Integer",
        "requestsLength": "Not using now. Will be removed in 0.2.0",
        "confirmationsLength": "Not using now.,
        "payloadHash": "Payload hash. Hex",
        "generatorPublicKey": "Generator public key. Hex",
        "generatorId": "Generator id. String.",
        "generationSignature": "Generation signature. Not using. Will be removed in 0.2.0",
        "blockSignature": "Block signature. Hex"
    }
}
```

### Get blocks
Get all blocks.

```js
var arkApi = require("arkjs-wrapper")
var parameters = {
  "totalFee: total fee of block. (Integer)",
  "totalAmount: total amount of block. (Integer)",
  "previousBlock: previous block of need block. (String)",
  "height: height of block. (Integer)",
  "generatorPublicKey: generator id of block in hex. (String)",
  "limit: limit of blocks to add to response. Default to 20. (Integer)",
  "offset: offset to load blocks. (Integer)",
  "orderBy: field name to order by. Format: fieldname:orderType. Example: height:desc, timestamp:asc (String)"
};

arkApi.getBlocks(parameters, function(err, success, response){
  console.log(response);
});
```

All parameters joins by OR.

**Response**
```
{
  "success": true,
  "blocks": [
    "array of blocks"
  ]
}
```

### Get blockchain fee
Get transaction fee for sending "normal" transactions.

```js
var arkApi = require("arkjs-wrapper")

arkApi.getBlockchainFee(function(err, success, response){
  console.log(response);
});
```

**Response**
```
{
  "success": true,
  "fee": "fee amount"
}
```

### Get blockchain height
Get blockchain height.

```js
var arkApi = require("arkjs-wrapper")

arkApi.getBlockchainHeight(function(err, success, response){
  console.log(response);
});
```

**Response**
```
{
  "success": true,
  "height": "Height of blockchain. Integer"
}
```

### Get forged by account
Get amount forged by account.

```js
var arkApi = require("arkjs-wrapper")

arkApi.getForgedByAccount("generatorPublicKey: generator id of block in hex. (String)",
                          function(err, success, response){
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "sum": "Forged amount. Integer"
}
```

## Delegates
Delegates API.

### Enable delegate on account
Calls for delegates functional.

### Get delegates
Get delegates list.

**Request**
```js
var arkApi = require("arkjs-wrapper")
var parameters = {
  "limit: Limit to show. Integer. (Integer)",
  "offset: Offset (Integer)",
  "orderBy: Order by field (String)"
};

arkApi.getDelegates(parameters, function(err, success, response){
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "delegates": "delegates objects array"
}
```

### Get delegate
Get delegate by username.

**Request**
```js
var arkApi = require("arkjs-wrapper")

arkApi.getDelegate("username of delegate", function(err, success, response){
    console.log(response);
});
```

**Response**
```
{
    "success": true,
    "delegate": {
        "username": "username of delegate",
        "transactionId": "transaction id",
        "votes": "amount of stake voted for this delegate"
}
```

### Get votes of account
Get votes by account address.

**Request**
```js
var arkApi = require("arkjs-wrapper")
arkApi.getVotes("Address of the account. (String)",
  function(error, success, response) {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "delegates": [array of delegates]
}
```

### Get voters
Get voters of delegate.

**Request**
```js
var arkApi = require("arkjs-wrapper")
arkApi.getVoters("Public key of delegate. (String)",
  function(error, success, response) {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "accounts": [array of accounts who vote for delegate]
}
```


## License

This documentation is based on: https://github.com/LiskHQ/lisk-docs/blob/development/APIReference.md

MIT License

Copyright (c) 2016 Ark  
Copyright (c) 2016 Lisk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
