const { cd, exec } = require('shelljs');

module.exports = (path) => {
  cd(path);
  exec('npm i');
};
