const { join } = require('path');
const { cp } = require('shelljs');

const getFilePath = (apiType, language, file = '*') => {
  return join(
    __dirname,
    `./skeleton/${apiType}/${language}/${file}`,
  );
};

module.exports = (apiType, language, path) => {
  const skeletonPath = getFilePath(apiType, language);
  const envFile = getFilePath(apiType, language, '.env');
  const gitIgnore = getFilePath(apiType, language, '.gitignore');

  cp('-r', skeletonPath, path);
  cp('-r', envFile, path);
  cp('-r', gitIgnore, path);
};
