const fs = require('fs');
const path = require('path');
const { EOL } = require('os');
const c_p = require('child_process');

const strategy = process.argv[2];
const message = process.argv[3];
const cwd = process.cwd();
const pathToPackage = path.join(cwd, 'package.json');
const pathToPackageLock = path.join(cwd, 'package-lock.json');

const oldPackageJson = JSON.parse(fs.readFileSync(pathToPackage));
const oldPackageLockJson = JSON.parse(fs.readFileSync(pathToPackageLock));

const oldVersionAsString = JSON.parse(fs.readFileSync(pathToPackage)).version;

const oldVersionAsArray = oldVersionAsString
  .split('.')
  .map(number => Number(number));

function strategyArray() {
  if (strategy === 'm' || strategy === 'major') {
    return ['increase', 'reset', 'reset'];
  }
  if (strategy === 'n' || strategy === 'minor') {
    return ['same', 'increase', 'reset'];
  }
  if (strategy === 'p' || strategy === 'patch') {
    return ['same', 'same', 'increase'];
  }
  return undefined;
}

function transform(action, num) {
  return action === 'reset'
    ? 0
    : action === 'increase'
    ? num + 1
    : action === 'same'
    ? num
    : undefined;
}

const newVersionAsArray = strategyArray().map((action, index) => {
  return transform(action, oldVersionAsArray[index]);
});

const newVersionAsString = newVersionAsArray.join('.');

const filesChanged = 'package*';
const woohoo = '🎉';

const rcCommit = `${filesChanged}: v${newVersionAsString} Bump ${strategy} for ${message} ${woohoo}`;

const newPackageJson = oldPackageJson;
const newPackageLockJson = oldPackageLockJson;

newPackageJson.version = newVersionAsString;
newPackageLockJson.version = newVersionAsString;

function updatePackageFiles() {
  fs.writeFileSync(
    pathToPackage,
    `${JSON.stringify(newPackageJson, null, 2)}${EOL}`
  );
  fs.writeFileSync(
    pathToPackageLock,
    `${JSON.stringify(newPackageLockJson, null, 2)}${EOL}`
  );
}

updatePackageFiles();

console.log('oldVersionAsArray', oldVersionAsArray);
console.log(rcCommit);

console.log(c_p.execSync('ls -a', { encoding: 'utf8' }));
