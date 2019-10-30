const path = require('path');
const c_p = require('child_process');
const chalk = require('chalk');

exports.builder = yargs => {};

// handler assumes being called immediately after bump <strategy> <message> was called
exports.handler = argv => {
  function gitResetHead() {
    c_p.execSync(`git reset HEAD~`, { encoding: 'utf8' });
  }

  function gitCheckoutPackages() {
    c_p.execSync(`git checkout -- package*`, { encoding: 'utf8' });
  }

  function confirm() {
    console.log(chalk`
{rgb(237, 112, 50) 🍑 : Successfully undo the prior bump and commit}`);
  }

  function write() {
    gitResetHead();
    gitCheckoutPackages();
    confirm();
  }

  write();

  console.log('UNDO HANDLER fn', argv);
};
