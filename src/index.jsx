import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import 'css/main.less';

ReactDOM.render(<App a={3} b={3} />, document.getElementById('app'));

// if (module.hot) {
//   module.hot.accept();
// }
