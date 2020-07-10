const receive = require('./worker/rabbitmq/receive');
const twitter = require('./worker/twitter/twitter');
const api = require('./api/index');

receive();
twitter();
api();
