const fs = require('fs');
const path = require('path');

const strategy = process.argv[2];
const message = process.argv[3];
const cwd = process.cwd();
const pathToPackage = path.join(cwd, 'package.json');

const versionAsString = JSON.parse(fs.readFileSync(pathToPackage)).version;

const version = {
  major: Number(versionAsString.split('.')[0]),
  minor: Number(versionAsString.split('.')[1]),
  patch: Number(versionAsString.split('.')[2])
};

const newVersionAsString = () => {
  const [major, minor, patch] = [version.major, version.minor, version.patch];

  const newVersion = {
    major: bump('major') ? major + 1 : major,
    minor: bump('minor') ? minor + 1 : minor,
    patch: bump('patch') ? patch + 1 : patch
  };

  return `${newVersion.major}.${newVersion.minor}.${newVersion.patch}`;
};

const bump = _strategy => {
  if (_strategy == 'major' && (strategy === 'm' || strategy === 'major')) {
    return true;
  }
  if (_strategy == 'minor' && (strategy === 'n' || strategy === 'minor')) {
    return true;
  }
  if (_strategy == 'patch' && (strategy === 'p' || strategy === 'patch')) {
    return true;
  }
  return false;
};

const filesChanged = 'package*';
const woohoo = '🎉';

const rcCommit = `${filesChanged}: v${newVersionAsString()} Bump ${strategy} for ${message} ${woohoo}`;

console.log(rcCommit);
