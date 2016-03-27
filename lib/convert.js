'use strict';
const yaml = require('js-yaml');
const policyOptions = ['DIRECT', 'REJECT'];
module.exports = (surge, name) => {
  const config = {};
  config.ruleSets = [];
  const ruleSet = {
    name: name || 'surge',
    rules: []
  };
  for (let rule of surge.Rule) {
    switch (rule.type) {
      case 'DOMAIN':
      case 'DOMAIN-SUFFIX':
      case 'DOMAIN-KEYWORD':
      case 'GEOIP':
      case 'IP-CIDR':
        let policy = policyOptions.indexOf(rule.policy) !== -1 ? rule.policy : 'Proxy';
        if (policy == 'REJECT') policy = 'BLOCK';
        ruleSet.rules.push(`${rule.type},${rule.value},${policy}`);
        break;
    }
  }
  config.ruleSets.push(ruleSet);
  return yaml.safeDump(config);
};
