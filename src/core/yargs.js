const yargs = require('yargs');

const args = yargs
  .help(false)
  .version(false)

const getYArgs = () => {
  return args;
}

const baseOptions = (yargs) => {
  return yargs
    .option('env', {
      describe: 'The environment to run the command in',
      default: 'development',
      type: 'string'
    })
    .option('test', {
      describe: 'test',
      default: 'development',
      type: 'string'
    })
}

module.exports = {
  baseOptions,
  getYArgs,
}
