# React Sum

**NOTE:** component is under re-development, so new upcoming versions might be breaking-change-like.

Experimental ReactJS component to show sum of 2 numbers.

Experiment related to Component creation process and usage of tools, such as: npm/yarn, ESLINT, Webpack, Babel, Create React App, CSS Modules (migrated from LESS) React Scripts, Storybook, Jest, Enzyme, Cucumber and CI tool Circle CI.

<!-- https://circleci.com/docs/2.0/status-badges/ -->
<!-- [![CircleCI](https://circleci.com/gh/alundiak/react-sum.svg?style=svg)](https://circleci.com/gh/alundiak/react-sum/) -->
[![TravisCI](https://travis-ci.org/alundiak/react-sum.svg?branch=master)](https://travis-ci.org/alundiak/react-sum)
[![CircleCI](https://circleci.com/gh/alundiak/react-sum/tree/master.svg?style=svg)](https://app.circleci.com/pipelines/github/alundiak/react-sum?branch=master)
[![SemaphoreCI 2.0 Build Status](https://alundiak.semaphoreci.com/badges/react-sum/branches/master.svg?key=ef261846-bd66-4474-be5c-e2daebc35350)](https://alundiak.semaphoreci.com/projects/react-sum)
[![AppVeyorCI](https://ci.appveyor.com/api/projects/status/selytkekkws81f3v?svg=true)](https://ci.appveyor.com/project/alundiak/react-sum)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Falundiak%2Freact-sum.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Falundiak%2Freact-sum?ref=badge_shield)


## Consumer Usage

### Installation

- `yarn add @lundiak/react-sum`
- `npm install --save @lundiak/react-sum`

Import the component where you want to use it, and you ready to use it in `render()`.

Approach 1 `import ReactSum from '@lundiak/react-sum'` for `<ReactSum.Sum />` usage.

Approach 2 `import { Sum } from '@lundiak/react-sum';` for `<Sum />` usage.

### Props

| _Prop_ |     _Description_     | _Default value_ |
| ------ | :-------------------: | :-------------: |
| a  | a |      2       |
| b  | b |      2       |

### Usage example

How to add to your file `MyApp.jsx`:

```jsx
import React, { Component } from 'react';
import { Sum } from '@lundiak/react-sum';

class MyApp extends Component {
  render() {
    return (
        <Sum a={2} b={3}/>
    );
  }
}

export default MyApp;
```

## Development

**2021** Re-Bootstrap with "Create React App". Now using `yarn`. `npm` can be used as fallback approach. But need to verify CI to be sure.

### Installation

- `yarn install`
- `npm install`

### Tests

- `yarn test`
- `npm test`

### Style Guide vs. Documentation

**Storybook**

- [Guide for setup](https://storybook.js.org/docs/guides/guide-react/)
- [Writing Storybook Stories](https://storybook.js.org/docs/basics/writing-stories/)
- [Storybook examples](https://github.com/storybookjs/storybook/tree/next/examples)

2021 setup.
- https://storybook.js.org/docs/react/get-started/install


- `sb init --type react` (goes kinda better with latest setup for `.storybook` (main.js + preview.js)). Goes as "React app".
- `sb init --type react_project` (goes kinda better with latest setup for `.storybook` (main.js + preview.js)). Goes as "React library".
- `sb init --type react_scripts` (goes kinda wrong with deprecated setup for `.storybook` (addons.js + config.js))

To run locally:

- `yarn storybook`
- `npm run storybook`

To build for bundle:
- `yarn build-storybook`
- `npm run build-storybook`

**Storybook Addons**
- https://github.com/tuchk4/storybook-readme
- https://www.npmjs.com/package/@storybook/addon-storysource (alternative to [storybook-addon-jsx](https://www.npmjs.com/package/storybook-addon-jsx))

**Docz** and **Styleguidist** and other
- https://css-tricks.com/front-end-documentation-style-guides-and-the-rise-of-mdx/


### Publish new version - TBD

`npm version patch`

Note: it will run:
- `npm run prodBuild` to build JSX files into `dist` folder.
- `npm test` to verify Component logic (but for now Jest and Cucumber uses `dist` folder files).
- `npm run build-storybook` to build local, static version of Storybook ready for publish.
- will add changes files to git commit and publish changes.
- Using `patch` will increase SemVer patch only.


## Resources - TBD

About npm `main`, `browser` and `module`, `jsnext:main`, `esm`, `esnext`(2017)
- https://webpack.js.org/configuration/resolve/#resolvemainfields
- https://shuheikagawa.com/blog/2017/01/05/main-jsnext-main-and-module/
- https://nodesource.com/blog/es-modules-and-node-js-hard-choices/

>If package.json has "main" field but not a "module" field, all files in that package are loaded as CommonJS.
If a package.json has a "module" field but not "main" field, all files in that package are loaded as ES Modules.
If a package.json has neither "main" nor "module" fields, it will depend on on whether an index.js or a module.js exists in the package as to whether to load files in the package as CommonJS or ES Modules respectively.

- https://github.com/webpack/webpack/issues/4674
- http://2ality.com/2017/04/transpiling-dependencies-babel.html

About rename `.babelrc` to `babel.config.js` and how this fix `import`-ing issue.
- https://github.com/babel/babel/issues/7879
- https://github.com/babel/babel/issues/8577
- https://github.com/babel/babel/issues/8711


### Webpack related
- https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f


### Math related
- https://github.com/cezary/react-math + https://github.com/ForbesLindesay/ascii-math
- HTML [math](https://developer.mozilla.org/en-US/docs/Web/MathML/Element/math) tag [isn't supported](https://caniuse.com/#search=mathml) by Chrome, and works only in Firefox and Safari.
- http://eyeasme.com/Joe/MathML/MathML_browser_test.html

## TODO

- JSS - https://cssinjs.org/
- Styled Component?
- ReactCSS - https://github.com/casesandberg/reactcss
- How to convert valid DOM element of `math` tag into JSX/React Valid element? [This](https://medium.com/javascript-inside/transforming-elements-in-react-8e411c0f1bba) maybe be helpful.

## CI platform notes

- The fastest seems to be CircleCI. Does have extensive API/documentation. But getting badge was always a kind of problem.
- Then TravisCI.
- Then SemaphoreCI.
- Old semaphoreci v1 max. supported NodeJS v10.x/
- Then AppVeyor, the slowest for now.
- Fossa just for licence verification.

**CI related resources**:

- https://circleci.com/blog/creating-automated-build-test-and-deploy-workflows-for-orbs-part-2/


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Falundiak%2Freact-sum.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Falundiak%2Freact-sum?ref=badge_large)