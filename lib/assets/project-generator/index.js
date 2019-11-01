const { join } = require('path');
const { cp } = require('shelljs');

module.exports = (apiType, language, path) => {
  const skeletonPath = join(
    __dirname,
    `./skeleton/${apiType}/${language}/*`,
  );

  cp('-r', skeletonPath, path);
};
