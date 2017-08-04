const path = require('path');
const fs = require('mz/fs');

const tag = (
  process.env.TRAVIS_TAG ||
  process.env.CIRCLE_TAG ||
  process.env.DRONE_TAG ||
  process.env.GIT_TAG
);

if (!tag) {
  throw new Error('Requires a environment variable to get git tag');
}

fs.readFile(path.join(__dirname, '../package.json'), 'utf8')
  .then(pkgStr => {
    const json = JSON.parse(pkgStr);
    json.version = tag;
    return json;
  })
  .then(json => {
    return fs.writeFile(path.resolve('./dist/package.json'), JSON.stringify(json, null, 2), 'utf8');
  })
  .then(() => {
    console.log('package.json successfully written in dist');
    process.exit(0);
  })
  .catch(err => {
    console.warn(err);
    process.exit(1);
  });
