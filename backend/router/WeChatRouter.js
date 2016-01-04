var router = require("express").Router({}),
    wechat = require('anychat-enterprise'),
    go = require('../GlobalObject');

router.use('/*', wechat(go.config.base).text(function (message, req, res, next) {
}).image(function (message, req, res, next) {
}).location(function (message, req, res, next) {
}).event(function (message, req, res, next) {
}).middlewarify());

module.exports = router;