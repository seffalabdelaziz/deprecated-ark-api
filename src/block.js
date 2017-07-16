const options = require('./options.js');
const Api = require('./api.js');

const Block = {};

Block.getBlock = function (blockId, callback) {
  Api.get({
    url: `${network.node}/api/blocks/get`,
    qs: {
      id: blockId,
    },
    json: true,
  }, callback);
};

Block.getBlocks = function (qs, callback) {
  Api.get({
    url: `${network.node}/api/blocks`,
    qs,
    json: true,
  }, callback);
};

Block.getBlockchainFee = function (callback) {
  Api.get({
    url: `${network.node}/api/blocks/getFee`,
    json: true,
  }, callback);
};

Block.getBlockchainHeight = function (callback) {
  Api.get({
    url: `${network.node}/api/blocks/getHeight`,
    json: true,
  }, callback);
};

Block.getForgedByAccount = function (generatorPublicKey, callback) {
  Api.get({
    url: `${network.node}/api/delegates/forging/getForgedByAccount`,
    qs: {
      generatorPublicKey,
    },
    json: true,
  }, callback);
};

module.exports = Block;
