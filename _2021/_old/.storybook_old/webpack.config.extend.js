// Deprecated
// https://storybook.js.org/docs/configurations/custom-webpack-config/#extend-mode-deprecated
// const path = require('path');
// your app's webpack.config.js
const custom = require('../webpack.config.babel');

module.exports = async ({ config, mode }) => {
  console.log(config, mode);

  return {
    ...config,
    module: {
      ...config.module,
      rules: custom.module.rules
    }
  };
};