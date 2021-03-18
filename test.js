const fs = require('fs');
const assert = require('assert').strict;
const path = require('path');
const log = require('./log');

const {returnSmooshed} = require('./smoosh');

// eslint-disable-next-line no-undef
const args = process.argv.slice(2);

const dirs = args.length > 0 ? args : fs.readdirSync('./tests').map(f => `./tests/${f}`);

dirs.forEach(dir => {
  const files = fs.readdirSync(dir);

  files
    .filter(file => file.endsWith('.js'))
    .map(file => file.substr(0, file.length - 3))
    .forEach(file => {
      const fullFile = path.resolve(dir, file);
      log.logProgress(`Testing ${fullFile}.js`);
      const smooshed = returnSmooshed(fullFile, {prettier: true});
      //
      fs.writeFileSync(`${fullFile}-output.ts`, smooshed, 'utf8');

      const target = fs.readFileSync(`${fullFile}.ts`, 'utf8');
      assert.equal(smooshed, target);
    });
});

log.logSuccess('Done!');
