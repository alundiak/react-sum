// main.js appears to be created from `sb init --type react`
// But in fact this file, I manually created after `yarn storybook` logs hint...
// And then modified a bit
const path = require('path');

module.exports = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  logLevel: 'debug',
  addons: [
    // https://github.com/storybookjs/presets/tree/master/packages/preset-create-react-app
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
    '@storybook/addon-notes', // Notes tab at the top. Looks like outdated or not supported anymore.
    '@storybook/addon-info', // "With Info" link in upper right corner. Looks like outdated or not supported anymore.
    '@storybook/addon-actions', // Actions tab at the bottom, aka Canvas \ Actions
    '@storybook/addon-knobs', // Knobs tab at the bottom. Aka Canvas \ Knobs. checkboxes, boolean toggles, etc.
    // '@storybook/addon-knobs/preset', // ???
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
      // options: { mdxBabelOptions: { babelrc: true, configFile: true } },
      // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#user-babelrc-disabled-by-default-in-mdx
    },
    {
      name: '@storybook/addon-essentials',
      options: {
        viewport: false,
      },
    },
  ],
  // from https://github.com/storybookjs/storybook/tree/master/examples
  // NOT sure if I really need, because neither `sb init --type react` nor `sb init --type react_scripts` generates it.
  // webpackFinal: (config) => {
  //   // add monorepo root as a valid directory to import modules from
  //   config.resolve.plugins.forEach((p) => {
  //     if (Array.isArray(p.appSrcs)) {
  //       p.appSrcs.push(path.join(__dirname, '..', '..', '..'));
  //     }
  //   });
  //   return config;
  // },
  // core: {
  //   builder: 'webpack4',
  // },
};