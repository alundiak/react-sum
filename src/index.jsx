import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { Sum } from 'components/App';
import { SumWithCssAlias } from 'components/App';
import 'css/main.less';

const Main = () => (
  <React.Fragment>
    <App.Sum />
    <App.SumWithCssAlias />

    <Sum a={3} b={3} />
    <SumWithCssAlias a={4} b={4} />

    <Sum a={3} b={3} />
    <Sum a={2} b={-2} />
    <Sum a={2} b={-3} />

    <Sum a={33} b={33} useImages />

    {/* <Sum a={44} b={44} useASCII /> */}

  </React.Fragment>
);

ReactDOM.render(<Main />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
