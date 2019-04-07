import React from 'react';
import PropTypes from 'prop-types';

const Count = (props) => {
    const { list } = props;
    return (
        <div className="count">
            <h1>Count</h1>
            <h3>
                <code>{JSON.stringify(list)}</code> has {list.length} elements
            </h3>
        </div>
    );
};

Count.propTypes = {
    list: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
};

Count.defaultProps = {
    list: []
};

export default Count;
