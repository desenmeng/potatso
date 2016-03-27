const potatso = require('../');
const fs = require('fs');

const surgeConfig = fs.readFileSync('./surge.conf', 'utf-8');
console.log(potatso(surgeConfig, 'potatso_test'));
