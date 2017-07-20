## Blocks
Blocks manage API.

### Get block
Get block by id.

```js
var arkApi = require("arkjs-wrapper")
arkApi.getBlock("id: Id of block", (err, success, response) => {
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

arkApi.getBlocks(parameters, (error, success, response) => {
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

arkApi.getBlockchainFee((error, success, response) => {
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

arkApi.getBlockchainHeight((error, success, response) => {
  console.log(response);
});
```

**Response**
```
{
  "success": true,
  "height": Height of blockchain. (Integer)
}
```

### Get forged by account
Get amount forged by account.

```js
var arkApi = require("arkjs-wrapper")

arkApi.getForgedByAccount("Delegate public key (String)",
                          (error, success, response) => {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "sum": Forged amount (Integer)
}
```
