const yargs = require('yargs');

const argv = yargs.scriptName('bump').usage(
  '$0 <strategy> <message>',
  'Bump your version given a strategy, and add content to a git commit message describing the bump.',
  yargs => {
    yargs
      .positional('strategy', {
        describe: 'strategy for the version bump',
        type: 'string',
        choices: ['major', 'minor', 'patch']
      })
      .positional('message', {
        describe:
          'description of the reason for the version bump, to be appended to the generated git commit message',
        type: 'string'
      });
  },
  argv => {
    console.log('this command will be run by default');
  }
).argv;

console.log(argv);
