import { configure } from '@storybook/react';
// or
// import { load } from '@storybook/react';

// automatically import all files ending in *.stories.js
// https://webpack.js.org/guides/dependency-management/#require-context
// TODO play more with context. It might be alternative approach to `config.resolve.modules`
const req1 = require.context('../stories', true, /\.stories\.js?$/);
const req2 = require.context('../stories', true, /\.stories\.md?$/);

function loadStories() {
  req1.keys().forEach(filename => req1(filename));
  req2.keys().forEach(filename => req2(filename));
}

// load(req1, module);
// load(req2, module);

configure(loadStories, module);
