import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { Sum } from 'components/App';
import { Count } from 'components/App';
import CountWithAlias from 'components/CountWithAlias';
import 'css/main.less';

const Main = () => (
  <React.Fragment>
    <Sum />
    <Count />

    <App.Sum a={3} b={3} />
    <App.Count list={[1, 2, 3, 4]} />

    <CountWithAlias list={[1, 2, 'hello', 6, '70', 23, 39434]} />
  </React.Fragment>
);

ReactDOM.render(<Main />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
