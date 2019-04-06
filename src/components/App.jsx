import React from 'react';
import PropTypes from 'prop-types';

// TODO rework in JSS with ability to receive styles from props.
import 'css/app.less';
// import 'css/test.css';

class App extends React.Component {
    state = {
        // TODO
    }

    render() {
        const { a, b } = this.props;
        const result = a + b;

        return (
            <div>
                <h1 className="test">{result}</h1>
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

// TODO
// App.Component1 = Component1;
// App.Component2 = Component2;
// App.Component3 = Component3;

export default App;