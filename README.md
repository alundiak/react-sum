# React Sum

Experimental ReactJS component to show sum of 2 numbers, as npm package.

### Installation

`npm install --save @lundiak/react-sum`

### How To Use

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
import ReactSum from '@lundiak/react-sum';

class MyApp extends Component {
  render() {
    return (
        <ReactSum.Sum a={2} b={3}/>
    );
  }
}

export default MyApp;
```

### Storybook

- [Guide for setup](https://storybook.js.org/docs/guides/guide-react/)
- [Writing Storybook Stories](https://storybook.js.org/docs/basics/writing-stories/)

To run locally:

```
npm run storybook
```

### Resources

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


Webpack and related
- https://itnext.io/how-to-package-your-react-component-for-distribution-via-npm-d32d4bf71b4f

Other similar named packages
- https://github.com/cezary/react-math + https://github.com/ForbesLindesay/ascii-math

Notes
- HTML [math](https://developer.mozilla.org/en-US/docs/Web/MathML/Element/math) tag [isn't supported](https://caniuse.com/#search=mathml) by Chrome, and works only in Firefox and Safari.
- http://eyeasme.com/Joe/MathML/MathML_browser_test.html


## TODO

- JSS - https://cssinjs.org/
- Styled Component?
- ReactCSS - https://github.com/casesandberg/reactcss
- How to convert valid DOM element of `math` tag into JSX/React Valid element? [This](https://medium.com/javascript-inside/transforming-elements-in-react-8e411c0f1bba) maybe be helpful.