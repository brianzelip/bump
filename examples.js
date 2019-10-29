const yargs = require('yargs');

// const argv = yargs
//   .scriptName('bump')
//   .command(
//     ['major <message>', 'M <message>'],
//     "Bump the version's major number, set the minor and patch numbers to zero, and append message to the generated commit message.",
//     function(yargs) {
//       return yargs.option('url', {
//         alias: 'u',
//         default: 'http://yargs.js.org/'
//       });
//     }
//   )
//   .command(
//     ['minor <message>', 'N <message>'],
//     "Bump the version's minor number, set the patch numbers to zero, and append message to the generated commit message.",
//     yargs => {
//       yargs.positional('message', {
//         describe: 'message to append to the generated commit message',
//         type: 'string'
//       });
//     }
//   )
//   .command(
//     ['patch <message>', 'P <message>'],
//     "Bump the version's patch number and append message to the generated commit message.",
//     yargs => {
//       yargs.positional('message', {
//         describe: 'message to append to the generated commit message',
//         type: 'string'
//       });
//     }
//   )
//   .wrap(yargs.terminalWidth()).argv;

// const argv = yargs
//   .scriptName('bump')
//   .command(
//     '$0 -s -m',
//     'the default command',
//     yargs => {
//       yargs.option('s', {
//         alias: 'strategy',
//         describe: 'strategy for the version bump',
//         choices: ['major', 'minor', 'patch']
//       });
//     },
//     argv => {
//       console.log('this command will be run by default');
//     }
//   )
//   .wrap(yargs.terminalWidth()).argv;

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
