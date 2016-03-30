const surg = require('surg');
const convert = require('./lib/convert');
const md5 = require('./lib/md5');
module.exports = (config, name, version) => {
  version = version || md5(config);
  const surge = surg(config);
  return convert(surge, name, version);
};
