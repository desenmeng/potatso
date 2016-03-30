const crypto = require('crypto');

module.exports = text => {
  return crypto.createHash('md5').update(text).digest('hex');
};
