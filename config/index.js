require('dotenv').config();

const config = {
  node_env: process.env.NODE_ENV,
  twitter: {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    queue: 'tweets',
  },
  twitter_track: {
    track:
      '@node,#node,@platzi,#platzi,@opensource,#opensource,@open source,#open source',
  },
  twitter_track_all: {
    track: 'node,platzi,opensource',
  },
  api: {
    port: process.env.PORT || 3000,
  },
};

module.exports = config;
