#!/usr/bin/env node

const amqp = require('amqplib/callback_api');
const redis = require('../../models/redis');
const config = require('../../config/index');

amqp.connect('amqp://localhost', function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    var queue = config.twitter.queue;

    channel.assertQueue(queue, {
      durable: false,
    });

    console.log(' [*] Waiting for messages in %s.', queue);

    channel.consume(
      queue,
      function (msg) {
        console.log(' [x] Received %s', msg.content.toString());
        redis.setValue(queue, msg.content);
      },
      {
        noAck: true,
      }
    );
  });
});
