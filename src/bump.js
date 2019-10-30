#!/usr/bin/env node

const yargs = require('yargs');
const chalk = require('chalk');

const argv = yargs
  .scriptName('bump')
  .usage(
    chalk`
{rgb(237, 112, 50) @bzelip/bump 🍑

Bump your package.json and package-lock.json files, and commit the change with a meaningful description.}
`
  )
  .command(
    '$0 <strategy> <message>',
    'Bump your version based on a strategy, and include a description of the reason for the bump in the generated commit message.',
    require('./modules/strategy.js')
  )
  .command(['undo', 'u'], 'undo the last bump', require('./modules/undo.js'))
  .alias('help', 'h')
  .alias('version', 'v').argv;
