import './App.css';

import Sum from './components/Sum';
import SumWithCssAlias from './components/SumWithCssAlias';

// TODO rework in JSS with ability to receive styles from props.
// import '../css/app.less';

export { Sum } // for <Sum /> usage
export { SumWithCssAlias } // for <SumWithCssAlias /> usage

// Do I need explicit export for further usage by external packages?
const App = {
  Sum,
  SumWithCssAlias
};

export default App; // for <App.Sum />, <App.SumWithCssAlias /> usage