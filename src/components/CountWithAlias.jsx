import React from 'react';
import PropTypes from 'prop-types';

import 'css/react-count.less';

const CountWithAlias = (props) => {
    const { list } = props;
    return (
        <div className="count">
            <h1>Count (w alias)</h1>
            <h3>
                <code>{JSON.stringify(list)}</code> has {list.length} elements
            </h3>
        </div>
    );
};

CountWithAlias.propTypes = {
    list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
};

CountWithAlias.defaultProps = {
    list: []
};

export default CountWithAlias;
