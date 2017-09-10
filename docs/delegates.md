## Delegates
Delegates API.

### Enable delegate on account
Calls for delegates

### Get delegate
Get delegate by username.

**Request**
```js
var arkApi = require("ark-api")

arkApi.getDelegate("username of delegate", (error, success, response) => {
    console.log(response);
});
```

**Response**
```
{
    "success": true,
    "delegate": {
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
}
```

### Get delegates
Get delegates list.

**Request**
```js
var arkApi = require("ark-api")
var parameters = {
  "limit: Limit to show. Integer. (Integer)",
  "offset: Offset (Integer)",
  "orderBy: Order by field (String)"
};

arkApi.getDelegates(parameters, (error, success, response) => {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "delegates": [Array of delegate objects]
}
```


### Get votes of account
Get votes by account address.

**Request**
```js
var arkApi = require("ark-api")
arkApi.getVotes("Address of the account. (String)", (error, success, response) => {
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
var arkApi = require("ark-api")
arkApi.getVoters("Public key of delegate. (String)", (error, success, response) => {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "accounts": [array of accounts who voted for delegate]
}
```
