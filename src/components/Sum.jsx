import React from 'react';
import PropTypes from 'prop-types';

class Sum extends React.Component {
    state = {
        // TODO - create input fields and take values for interactive Sum()
    }

    render() {
        const { a, b } = this.props;
        const result = a + b;

        return (
            <div className="sum">
                <h1>Sum</h1>
                <h3>{a} + {b} = {result}</h3>
            </div>
        );
    }
}

Sum.propTypes = {
    a: PropTypes.number,
    b: PropTypes.number
};

Sum.defaultProps = {
    a: 2,
    b: 2
};

export default Sum;
