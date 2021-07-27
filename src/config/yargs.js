const yargs = (manager) => {
  const { argv } = require('yargs')
    .command({
      command: 'create <option> <name>',
      //   aliases: ['config', 'cfg'],
      desc: 'Set a config variable',
      // builder: (yargs) =>{ yargs.default('value', 'true')},
      handler: (argv) => {
        manager(argv.option, argv.name);
      },
    })
    // provide a minimum demand and a minimum demand message
    .demandCommand(1, 'You need at least one command before moving on')
    .help();
};

module.exports = yargs;
