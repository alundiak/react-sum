import React from 'react';
import PropTypes from 'prop-types';

import 'css/app.less'; // TODO rework in JSS< with ability to receive styles from props.

class App extends React.Component {
    state = {
        // TODO
    }

    render() {
        const { a, b } = this.props;
        const result = a + b;

        return (
            <div>
                <h1>{result}</h1>
            </div>
        );
    }
}

App.propTypes = {
    a: PropTypes.number,
    b: PropTypes.number
};

App.defaultProps = {
    a: 2,
    b: 2
};

export default App;