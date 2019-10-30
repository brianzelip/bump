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

exports.handler = require('./strategy-handler.js').handler;
