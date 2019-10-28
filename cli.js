#!/usr/bin/env node

const yargs = require('yargs');

// const message = yargs => {
//   yargs.positional('message', {
//     alias: ['m', 'msg'],
//     describe:
//       'a string that describes the reason for the version bump, to be appended to the generated commit message',
//     type: 'string'
//   });
// };

// const argv = yargs(['--info'])
//   .scriptName('bump')
//   .help('info')
//   .usage()
//   .command(
//     ['major <message>', 'M <message>'],
//     "Bump the version's major number, set the minor and patch numbers to zero, and append message to the generated commit message.",
//     yargs => {
//       yargs.positional('message', {
//         describe:
//           'a string that describes the reason for the version bump, to be appended to the generated commit message',
//         type: 'string'
//       });
//     }
//   )
//   .command(
//     ['minor <message>', 'N <message>'],
//     "Bump the version's minor number, set the patch number to zero, and append message to the generated commit message.",
//     yargs => {
//       yargs.positional('message', {
//         describe:
//           'a string that describes the reason for the version bump, to be appended to the generated commit message',
//         type: 'string'
//       });
//     }
//   )
//   .command(
//     ['patch <message>', 'P <message>'],
//     "Bump the version's patch number, and append message to the generated commit message.",
//     yargs => {
//       yargs.positional('message', {
//         describe:
//           'a string that describes the reason for the version bump, to be appended to the generated commit message',
//         type: 'string'
//       });
//     }
//   ).argv;

// console.log(argv);

// const argv = require('yargs')('run --help').command(
//   'run <port> <guid>',
//   'run the server',
//   yargs => {
//     yargs.positional('message', {
//       describe:
//         'a string that describes the reason for the version bump, to be appended to the generated commit message',
//       type: 'string'
//     });
//   }
// ).argv;
// console.log(argv);

const argv = yargs.scriptName('bump');

console.log(argv.argv);
