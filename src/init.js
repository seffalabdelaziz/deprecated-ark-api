const network = require('./network.js');
const Api = require('./api.js');
const Peer = require('./peer.js');

const Init = {};

Init.initP;

Init.init = (networkName) => {
  Init.initP =  new Promise((resolve, reject) => {
    if(!network.useNet(networkName))
      reject("Network name doesn't exist");
    
    Peer.getPeersList((err, success, response) => {
      if(response != null && response.success)
      {
        network.peers = response.peers.filter((peer) => peer.status == "OK" && peer.delay <= 100);
        resolve();
      }
      else
        reject("Error getting peers");
    })
  });
}

module.exports = Init;
