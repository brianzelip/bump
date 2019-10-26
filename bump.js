#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { EOL } = require('os');
const c_p = require('child_process');

const chalk = require('chalk');

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

function isMajor() {
  return strategy === 'm' || strategy === 'major';
}

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
const shipped = '🚢';

const rcCommit = `${filesChanged}: v${newVersionAsString} Bump ${strategy} for ${message} ${
  isMajor() ? `${shipped}  ${woohoo}` : woohoo
}`;

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

function addPackages() {
  c_p.execSync(`git add package*`, { encoding: 'utf8' });
}

function commitBump() {
  c_p.execSync(`git commit -m "${rcCommit}"`, { encoding: 'utf8' });
}

function confirm() {
  console.log(chalk.rgb(255, 229, 180)`
    🍑  Successfully ${chalk.bold(strategy)} bumped version to ${chalk.bold(
    newVersionAsString
  )} with the commit message:
    
    ${rcCommit}
  `);
}

function bump() {
  updatePackageFiles();
  addPackages();
  commitBump();
  confirm();
}

bump();
