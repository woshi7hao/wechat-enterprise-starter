var wechat = require('anychat-enterprise'),
    config = require('./Config.json');

var ns = {};

ns.wechatAPI = new wechat.API(config.base.corpId, config.secret);
ns.config = config;

ns.fixUrl = function(url) {
    return config.rootServer + url;
};
ns.getWeChatAuthorizeUrl = function(redirect) {
    return ns.wechatAPI.getAuthorizeURL(ns.fixUrl(redirect), 1);
};

module.exports = ns;
