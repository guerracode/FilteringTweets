const client = require('../../models/twitter');
const chalk = require('chalk');
const util = require('util');
const send = require('../rabbitmq/send');
const config = require('../../config/index');

const queue = config.twitter.queue;
let msg = {};

var stream = client.stream('statuses/filter', config.twitter_track);

stream.on('data', function (event) {
  var regex = event.text;
  const expresion = '(RT)+';
  if (!regex.match(expresion)) {
    msg = {
      text: event.text,
      user: event.user.screen_name,
      user_name: event.user.name,
      date: event.created_at,
    };
    send(msg, queue);
  }
});

stream.on('error', function (error) {
  throw error;
});
