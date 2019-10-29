// imports
const fs = require('fs');
const path = require('path');
const { EOL } = require('os');
const c_p = require('child_process');

exports.builder = yargs => {
  yargs
    .positional('strategy', {
      describe: 'strategy for the version bump',
      type: 'string',
      choices: ['major', 'minor', 'patch']
    })
    .positional('message', {
      describe:
        'description of the reason for the version bump, to be appended to the generated commit message',
      type: 'string'
    });
};

exports.handler = argv => {
  // set up data
  const cwd = process.cwd();
  const pathToPackage = path.join(cwd, 'package.json');
  const pathToPackageLock = path.join(cwd, 'package-lock.json');
  const oldPackageJson = JSON.parse(fs.readFileSync(pathToPackage));
  const oldPackageLockJson = JSON.parse(fs.readFileSync(pathToPackageLock));
  const oldVersionAsString = oldPackageJson.version;
  const oldVersionAsArray = oldVersionAsString
    .split('.')
    .map(number => Number(number));
  const strategy = argv.strategy;
  const message = argv.message;

  // bump strategy
  const bumpRules = {
    major: ['bump', 'reset', 'reset'],
    minor: ['ignore', 'bump', 'reset'],
    patch: ['ignore', 'ignore', 'bump']
  };

  function transform(action, num) {
    return action === 'reset'
      ? 0
      : action === 'bump'
      ? num + 1
      : action === 'ignore'
      ? num
      : undefined;
  }

  function bump(vArray) {
    return vArray.map((num, i) => transform(bumpRules[strategy][i], num));
  }

  const newVersionAsArray = bump(oldVersionAsArray);
  const newVersionAsString = newVersionAsArray.join('.');

  const filesChanged = 'package*';
  const woohoo = '🎉';
  const shipped = '🚢';

  const commitMessage = `${filesChanged}: v${newVersionAsString} Bump ${strategy} for ${message} ${
    strategy === 'major' ? `${shipped}  ${woohoo}` : woohoo
  }`;

  // console.log('STRATEGY HANDLER fn', argv.strategy);
  console.log('newVersionAsArray:', newVersionAsArray);
  console.log('commitMessage:', commitMessage);
};
