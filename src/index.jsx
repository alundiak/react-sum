import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { Sum } from 'components/App';
// import { SumWithCssAlias } from 'components/App';
import 'css/main.less';

const Main = () => (
  <React.Fragment>
    {/* <Sum /> */}
    {/* <SumWithCssAlias /> */}

    <App.Sum a={3} b={3} />
    <App.SumWithCssAlias a={4} b={4} />

    <Sum a={33} b={33} useImages />

    <Sum a={44} b={44} useASCII />
  </React.Fragment>
);

ReactDOM.render(<Main />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
