const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const strategy = process.argv[2];
const message = process.argv[3];
const cwd = process.cwd();
const pathToPackage = path.join(cwd, 'package.json');

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

console.log('oldVersionAsArray', oldVersionAsArray);
console.log(rcCommit);

exec('ls', (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
