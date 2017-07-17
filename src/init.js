const Network = require('./network.js');
const Api = require('./api.js');
const Peer = require('./peer.js');

const Init = {};

Init.initP;

Init.init = (networkName) => {
    Init.initP = new Promise((resolve, reject) => {
        Network.useNet(networkName).then(() => {
            Peer.getPeersList((err, success, response) => {
                if(response != null && response.success)
                {
                    Network.peers = response.peers.filter((peer) => peer.status == "OK" && peer.delay <= 100);
                    resolve();
                }
                else
                    reject("Error getting peers");
            });
        });
    });
}

module.exports = Init;
