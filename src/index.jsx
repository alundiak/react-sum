import React from 'react';
import ReactDOM from 'react-dom';
// import App from 'components/App';
import { Sum, Count } from 'components/App';
import 'css/main.less';

// ReactDOM.render(<App.Sum />, document.getElementById('app'));
// ReactDOM.render(<App.Count />, document.getElementById('app'));

const Main = () => (
  <React.Fragment>
    <Sum a={3} b={3} />
    <Count list={[1, 2, 'hello', 6, '70', 23, 39434]} />
  </React.Fragment>
);

ReactDOM.render(<Main />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
