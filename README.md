[![Build Status](https://travis-ci.org/ArkEcosystem/ark-api.svg?branch=master)](https://travis-ci.org/ArkEcosystem/ark-api)

# arkjs-wrapper
A Node.JS module which provides an wrapper for the Ark API based off the deprecated ark-api module.
This module includes improvements to the original ark-api and is capable of creating and sending transactions properly by wrapping calls to arkjs.

## Installation

[![npm package](https://nodei.co/npm/ark-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ark-api/)


## Initialization
Before you begin, choose a network to initialize a list of nodes in that network
```js
var arkApi = require("arkjs-wrapper");
var network = "main" //or "dev"
arkApi.init(network);
```


## Documentation
- [Accounts](/docs/accounts.md)
- [Transactions](/docs/transactions.md)
- [Peers](/docs/peers.md)
- [Blocks](/docs/blocks.md)
- [Delegates](/docs/delegates.md)

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
