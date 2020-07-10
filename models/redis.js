const redis = require('redis');
const client = redis.createClient();

client.on('error', function (error) {
  console.error(error);
  client.end(true);
});

client.on('connect', function () {
  console.log('Redis Connected!');
});

function setValue(key, value) {
  client.rpush([key, value], function (err, reply) {
    if (err) console.log('rpushError: ' + err);
  });
}

function getValue(key, value = -1) {
  return new Promise((resolve, reject) => {
    client.lrange(key, 0, value, function (err, reply) {
      if (err) {
        console.log('lrangeError: ' + err);
        reject(err);
      }

      resolve(reply);
    });
  });
}

function deleteKey(key) {
  return new Promise((resolve, reject) => {
    client.del(key, function (err, reply) {
      if (err) reject(err);

      resolve(reply);
    });
  });
}

module.exports = {
  setValue,
  getValue,
  deleteKey,
};

// client.set('testKey2', 'testValue2', redis.print);
// // client.get('testKey', redis.print);

// client.keys('*', function (err, keys) {
//   if (err) return console.log(err);

//   for (var i = 0, len = keys.length; i < len; i++) {
//     console.log('ALL KEYS: ' + keys[i]);
//   }
// });
