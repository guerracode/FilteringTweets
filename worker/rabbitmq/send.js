var amqp = require('amqplib/callback_api');

module.exports = (msg, queue) => {
  amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      channel.assertQueue(queue, {
        durable: false,
      });
      channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));

      console.log(' [x] Sent %s', Buffer.from(JSON.stringify(msg)));
    });
    // setTimeout(function() {
    //     connection.close();
    //     process.exit(0);
    // }, 500);
  });
};
