const request = require("request");

const Network = {
  node: "",
  seeds: [],
  peers: [],
  hash: ""
};

var seeds = {
    main:[
        "5.39.9.240",
        "5.39.9.241",
        "5.39.9.242",
        "5.39.9.243",
        "5.39.9.244",
        "5.39.9.250",
        "5.39.9.251",
        "5.39.9.252",
        "5.39.9.253",
        "5.39.9.254",
        "5.39.9.255",
        "5.39.53.48",
        "5.39.53.49",
        "5.39.53.50",
        "5.39.53.51",
        "5.39.53.52",
        "5.39.53.53",
        "5.39.53.54",
        "5.39.53.55",
        "37.59.129.160",
        "37.59.129.161",
        "37.59.129.162",
        "37.59.129.163",
        "37.59.129.164",
        "37.59.129.165",
        "37.59.129.166",
        "37.59.129.167",
        "37.59.129.168",
        "37.59.129.169",
        "37.59.129.170",
        "37.59.129.171",
        "37.59.129.172",
        "37.59.129.173",
        "37.59.129.174",
        "37.59.129.175",
        "193.70.72.80",
        "193.70.72.81",
        "193.70.72.82",
        "193.70.72.83",
        "193.70.72.84",
        "193.70.72.85",
        "193.70.72.86",
        "193.70.72.87",
        "193.70.72.88",
        "193.70.72.89",
        "193.70.72.90"
    ],
    dev: [
        "167.114.29.51",
        "167.114.29.52",
        "167.114.29.53",
        "167.114.29.54",
        "167.114.29.55"
    ]
}

Network.useNet = (netName) => {
    return new Promise((resolve, reject) => {
        if(!seeds[netName])
            reject("Network name doesn't exist");

        var netSeeds = seeds[netName].map((seed) => netName == "main" ? `http://${seed}:4001` : `http://${seed}:4002`);
        Network.node = netSeeds[Math.floor(Math.random() * netSeeds.length)];
        Network.seeds = netSeeds;

        Network.getHash((err, succ, resp) => {
            if(resp && resp.success)
            {
                Network.hash = resp.nethash;
                resolve();
            }
            else
                reject("Error getting NetHash");
        });
    });
};

Network.getHash = (callback) => {
    var params = {
        method: "GET",
        url: `${Network.node}/api/blocks/getNetHash`,
        json: true
    };
    request(
        params,
        (error, response, body) => {
            if (error) {
                if (callback) {
                    callback(error, false, null);
                }
            } else if (callback) {
                callback(null, body.success, body);
            }
        }
    );
};

module.exports = Network;
