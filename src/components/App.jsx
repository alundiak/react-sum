import Sum from './Sum';
import SumWithCssAlias from './SumWithCssAlias';

// TODO rework in JSS with ability to receive styles from props.
import '../css/app.less';

const App = {
    Sum,
    SumWithCssAlias
};

export { Sum };
export { SumWithCssAlias };
export default App;