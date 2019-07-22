# React Sum

Experimental ReactJS component to show sum of 2 numbers.

Experiment related to Component creation process and usage of tolls, such as: npm, ESLINT, Webpack, Babel, Create React App, React Scripts, Storybook, Jest, Enzyme, Cucumber and CI tools.

[![TravisCI](https://travis-ci.org/alundiak/react-sum.svg?branch=master)](https://travis-ci.org/alundiak/react-sum)
[![CircleCI](https://circleci.com/gh/alundiak/react-sum.svg?style=svg)](https://circleci.com/gh/alundiak/react-sum)
[![SemaphoreCI](https://semaphoreci.com/api/v1/alundiak/react-sum/branches/master/badge.svg)](https://semaphoreci.com/alundiak/react-sum)
[![AppVeyorCI](https://ci.appveyor.com/api/projects/status/selytkekkws81f3v?svg=true)](https://ci.appveyor.com/project/alundiak/react-sum)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Falundiak%2Freact-sum.svg?type=small)](https://app.fossa.com/projects/git%2Bgithub.com%2Falundiak%2Freact-sum?ref=badge_small)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Falundiak%2Freact-sum.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Falundiak%2Freact-sum?ref=badge_shield)


## Consumer Usage

### Installation

`npm install --save @lundiak/react-sum`

Import the component where you want to use it, and you ready to use it in `render()`.

Approach 1:

`import ReactSum from '@lundiak/react-sum'`

`<ReactSum.Sum />`

Approach 2:

`import { Sum } from '@lundiak/react-sum';`

`<Sum />`

### Props

| _Prop_ |     _Description_     | _Default value_ |
| ------ | :-------------------: | :-------------: |
| a  | a |      2       |
| b  | b |      2       |

### Example

Your file `MyApp.jsx`:

```
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

### Installation

`npm install`

### Tests

`npm test`

### Style Guide vs. Documentation

**Storybook**

- [Guide for setup](https://storybook.js.org/docs/guides/guide-react/)
- [Writing Storybook Stories](https://storybook.js.org/docs/basics/writing-stories/)
- [Storybook examples](https://github.com/storybookjs/storybook/tree/next/examples)

To run locally:

```
npm run storybook
```

**Storybook Addons**
- https://github.com/tuchk4/storybook-readme
- https://www.npmjs.com/package/@storybook/addon-storysource (alternative to [storybook-addon-jsx](https://www.npmjs.com/package/storybook-addon-jsx))

**Docz** and **Styleguidist** and other
- https://css-tricks.com/front-end-documentation-style-guides-and-the-rise-of-mdx/


### Publish new version

`npm version patch`

Note: it will run:
- `npm run prodBuild` to build JSX files into `dist` folder.
- `npm test` to verify Component logic (but for now Jest and Cucumber uses `dist` folder files).
- `npm run build-storybook` to build local, static version of Storybook ready for publish.
- will add changes files to git commit and publish changes.
- Using `patch` will increase SemVer patch only.


## Resources

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

### Testing
  - https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8
  - https://raygun.com/blog/mocha-vs-jasmine-chai-sinon-cucumber/

### Jest + Enzyme
- https://jestjs.io/docs/en/tutorial-react
- https://blog.bitsrc.io/how-to-test-react-components-with-jest-and-enzyme-in-depth-145fcd06b90

### Cucumber for JavaScript
- [`cucumber`](https://github.com/cucumber/cucumber-js), since 2011, 979 commits
  - [`react-cucumber`](https://github.com/pzavolinsky/react-cucumber), since 2017, 16 commits
  - [`jest-cucumber`](https://github.com/bencompton/jest-cucumber), since 2018, 153 commits
    - https://github.com/bencompton/jest-cucumber/tree/master/examples
    - https://codeburst.io/react-behavior-driven-development-bdd-535afd364e5f
    - https://github.com/stlouisweb/react-cucumber-base - good examples



## TODO

- JSS - https://cssinjs.org/
- Styled Component?
- ReactCSS - https://github.com/casesandberg/reactcss
- How to convert valid DOM element of `math` tag into JSX/React Valid element? [This](https://medium.com/javascript-inside/transforming-elements-in-react-8e411c0f1bba) maybe be helpful.


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Falundiak%2Freact-sum.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Falundiak%2Freact-sum?ref=badge_large)