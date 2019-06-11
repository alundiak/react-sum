import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// https://webpack.js.org/guides/dependency-management/#require-context
// TODO play more with context. It might be alternative approach to `config.resolve.modules`
const req = require.context('../stories', true, /\.stories\.js?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
