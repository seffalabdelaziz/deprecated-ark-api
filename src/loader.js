const Api = require("./api.js");

const Loader = {};

Loader.getLoadingStatus = function (callback) {
    Api.get({
        path: "/api/loader/status",
        json: true,
    }, callback);
};

Loader.getSynchronisationStatus = function (callback) {
    Api.get({
        path: "/api/loader/status/sync",
        json: true,
    }, callback);
};

module.exports = Loader;
