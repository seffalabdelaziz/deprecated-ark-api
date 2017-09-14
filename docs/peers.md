
## Peers
Peers API.

### Get peers list
Get peers list by parameters.

**Request**
```js
var arkApi = require("ark-api")
arkApi.getPeersList((error, success, response) => {
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
var arkApi = require("ark-api")

arkApi.getPeer("ip: Ip of peer. (String)",
               "port: Port of peer. (Integer)",
               (error, success, response) => {
    console.log(response);
});
```

**Response**
```
{
  "success": true,
  "peer": {peer object}
}
```

### Get peer version, build time
Get peer version and build time

**Request**
```js
var arkApi = require("ark-api")
arkApi.getPeerVersion((error, success, response) => {
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
