// imports
const fs = require('fs');
const path = require('path');
const { EOL } = require('os');
const c_p = require('child_process');
const chalk = require('chalk');

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

  const newPackageJson = oldPackageJson;
  const newPackageLockJson = oldPackageLockJson;

  newPackageJson.version = newVersionAsString;
  newPackageLockJson.version = newVersionAsString;

  function bumpPackageFiles() {
    fs.writeFileSync(
      pathToPackage,
      `${JSON.stringify(newPackageJson, null, 2)}${EOL}`
    );
    fs.writeFileSync(
      pathToPackageLock,
      `${JSON.stringify(newPackageLockJson, null, 2)}${EOL}`
    );
  }

  function gitAddPackages() {
    c_p.execSync(`git add package*`, { encoding: 'utf8' });
  }

  function gitCommit() {
    c_p.execSync(`git commit -m "${commitMessage}"`, { encoding: 'utf8' });
  }

  function confirm() {
    console.log(chalk`
{rgb(237, 112, 50) 🍑 : Successfully {underline ${strategy}} bumped version to {underline ${newVersionAsString}} with the commit message:

"${commitMessage} "
}`);
  }

  function write() {
    bumpPackageFiles();
    gitAddPackages();
    gitCommit();
    confirm();
  }

  write();
};
