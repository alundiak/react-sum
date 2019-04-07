# React Sum

ReactJS component to show sum of 2 numbers, as npm package.

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

About rename `.babelrc` to `babel.config.js` and how this fix `import`-ing issue.
- https://github.com/babel/babel/issues/7879
- https://github.com/babel/babel/issues/8577
- https://github.com/babel/babel/issues/8711
