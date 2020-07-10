const redis = require('../../models/redis');
const config = require('../../config/index');

module.exports = {
  getTweets: async () => {
    let redisTweets;
    let allTweets;

    try {
      redisTweets = await redis.getValue(config.twitter.queue);
      allTweets = redisTweets.map(val => JSON.parse(val));
    } catch (err) {
      throw new Error('[err] getTweets ' + err);
    }

    return allTweets;
  },
};
