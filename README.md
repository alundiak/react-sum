# React Add

ReactJS component to add 2 numbers, as npm package.

### Installation

`npm install --save @lundiak/react-add`

### How To Use

First import this component where you want to use it

`import ReactAdd from '@lundiak/react-add'`

And you ready to use component in `render()``

`<ReactAdd />`

### Props

| _Prop_ |     _Description_     | _Default value_ |
| ------ | :-------------------: | :-------------: |
| a  | a |      2       |
| b  | b |      2       |

### Example

```
import React, { Component } from 'react';
import ReactAdd from '@lundiak/react-add';

class App extends Component {
  render() {
    return (
        <ReactAdd a={2} b="3"/>
    );
  }
}

export default App;
```
