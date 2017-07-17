const request = require("request");
const Network = require("./network");

const Api = {};

Api.get = function (config, callback) {
    config.method = "GET";
    Api.request(config, callback);
};

Api.post = function (config, callback) {
    config.method = "POST";
    Api.request(config, callback);
};

Api.put = function (config, callback) {
    config.method = "PUT";
    Api.request(config, callback);
};

Api.request = function (config, callback) {
    config.url = Network.node + config.path;
    request(
        config,
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

module.exports = Api;
