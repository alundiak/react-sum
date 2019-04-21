# React Sum

Experimental ReactJS component to show sum of 2 numbers, as npm package.

### Installation

`npm install --save @lundiak/react-sum`

### How To Use

First import this component where you want to use it

`import ReactSum from '@lundiak/react-sum'`

And you ready to use component in `render()``

`<ReactSum />`

### Props

| _Prop_ |     _Description_     | _Default value_ |
| ------ | :-------------------: | :-------------: |
| a  | a |      2       |
| b  | b |      2       |

### Example

```
import React, { Component } from 'react';
import ReactSum from '@lundiak/react-sum';

class App extends Component {
  render() {
    return (
        <ReactSum a={2} b={3}/>
    );
  }
}

export default App;
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
- https://github.com/cezary/react-math


## TODO

- JSS - https://cssinjs.org/
