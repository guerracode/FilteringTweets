const express = require('express');
const router = express.Router();
const config = require('../../config');
const redis = require('../../models/redis');

router.get('/tweets', async (req, res, next) => {
  try {
    let redisTweets = await redis.getValue(config.twitter.queue);
    let finalTweets = redisTweets.map(val => JSON.parse(val));

    res.status(200).json({
      tweets: finalTweets,
      message: 'All Correct!',
    });
  } catch (err) {
    next(err);
  }
});

router.delete('/tweets', async (req, res, next) => {
  try {
    let keyDeleted = await redis.deleteKey(config.twitter.queue);

    if (keyDeleted) {
      res.status(200).json({
        tweets: [],
        message: 'Tweets deleted correctly!',
      });
    } else {
      res.status(400).send('Error at deleting tweets');
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
