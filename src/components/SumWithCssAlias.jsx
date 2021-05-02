import React from 'react';
import PropTypes from 'prop-types';

// import 'css/react-sum.less'; // 'css/ a webpack alias referring to parent css folder
// import '../css/with-alias.css'; // parent css folder

import style1 from '../css/ReactSum.module.css';
import style2 from '../css/WithAlias.module.css';

class SumWithCssAlias extends React.Component {
    state = {
        // TODO - create input fields and take values for interactive Sum()
    }

    render() {
        const { a, b } = this.props;
        const result = a + b;

        return (
            <div className={style1.sum}>
                <h1 className={style2['with-alias']}>Sum (w alias)</h1>
                <h3>{a} + {b} = {result}</h3>
            </div>
        );
    }
}

SumWithCssAlias.propTypes = {
    a: PropTypes.number,
    b: PropTypes.number
};

SumWithCssAlias.defaultProps = {
    a: 2,
    b: 2
};

export default SumWithCssAlias;
