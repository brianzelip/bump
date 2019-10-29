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
    yargs => {
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
    },
    argv => {
      console.log('this command will be run by default');
    }
  )
  .command(
    ['undo', 'u'],
    'undo the last bump',
    yargs => {},
    argv => {
      console.log('this is the undo command');
    }
  )
  .alias('help', 'h')
  .alias('version', 'v').argv;

console.log(argv);
