const blacklist = require('metro-config/src/defaults/blacklist');
module.exports = {
  resolver: {
    blacklistRE: blacklist([
      // Ignore IntelliJ directories
      /.*\.idea\/.*/,
      // ignore git directories
      /.*\.git\/.*/,
      // Ignore android directories
      /.*\/app\/build\/.*/,
    ]),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
