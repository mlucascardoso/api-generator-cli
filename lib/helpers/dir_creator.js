const { mkdir } = require('shelljs');

module.exports = (folders) => {
  if (!Array.isArray(folders)) {
    folders = [folders];
  }

  folders.forEach(folder => {
    mkdir(folder);
  });
};
