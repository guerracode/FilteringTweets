const Twitter = require('twitter');
const config = require('./config');

var client = new Twitter({
  consumer_key: config.twitter.consumer_key,
  consumer_secret: config.twitter.consumer_secret,
  access_token_key: config.twitter.access_token_key,
  access_token_secret: config.twitter.access_token_secret,
});

var stream = client.stream('statuses/filter', { track: 'node' });
stream.on('data', function (event) {
  console.log(event && event.text);
});

stream.on('error', function (error) {
  throw error;
});
