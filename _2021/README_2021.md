# React Sum 2021 version readme

Re-Bootstrap with "Create React App". Now using `yarn`. `npm` can be used as fallback approach. But need to verify CI to be sure.

### Installation

- `yarn install`
- `npm install`

### Tests

- `yarn test`
- `npm test`

### Storybook

=> [Storybook.md](./.storybook/README.md)

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

> If package.json has "main" field but not a "module" field, all files in that package are loaded as CommonJS.
> If a package.json has a "module" field but not "main" field, all files in that package are loaded as ES Modules.
> If a package.json has neither "main" nor "module" fields, it will depend on on whether an index.js or a module.js exists in the package as to whether to load files in the package as CommonJS or ES Modules respectively.

- https://github.com/webpack/webpack/issues/4674
- http://2ality.com/2017/04/transpiling-dependencies-babel.html

About rename `.babelrc` to `babel.config.js` and how this fix `import`-ing issue.

- https://github.com/babel/babel/issues/7879
- https://github.com/babel/babel/issues/8577
- https://github.com/babel/babel/issues/8711

## TODO

**Math related**:

- https://github.com/cezary/react-math + https://github.com/ForbesLindesay/ascii-math
- HTML [math](https://developer.mozilla.org/en-US/docs/Web/MathML/Element/math) tag [isn't supported](https://caniuse.com/#search=mathml) by Chrome, and works only in Firefox and Safari.
- http://eyeasme.com/Joe/MathML/MathML_browser_test.html

**Tech Stack specific**:

- JSS - https://cssinjs.org/
- Styled Component?
- ReactCSS - https://github.com/casesandberg/reactcss
- How to convert valid DOM element of `math` tag into JSX/React Valid element? [This](https://medium.com/javascript-inside/transforming-elements-in-react-8e411c0f1bba) maybe be helpful.
- npm/yarn, Webpack related https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f

## CI/CD

- The fastest seems to be CircleCI. Does have extensive API/documentation. But getting badge was always a kind of problem.
  - https://circleci.com/blog/creating-automated-build-test-and-deploy-workflows-for-orbs-part-2/
- Then TravisCI.
- Then SemaphoreCI.
- Old semaphoreci v1 max. supported NodeJS v10.x/
- Then AppVeyor, the slowest for now.
- Fossa just for licence verification.

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Falundiak%2Freact-sum.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Falundiak%2Freact-sum?ref=badge_large)
