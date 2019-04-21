import React from 'react';
import parse from 'ascii-math';

import '../css/with-ascii.less';

const DangMath = (props) => {
    const { a, b, c } = props;
    const res = parse(`sum(${a}+${b})=${c}`);
    const mathML = res.toString();

    /* eslint react/self-closing-comp: 0 */
    /* eslint react/no-danger: 0 */
    return (
        <div className="with-ascii" dangerouslySetInnerHTML={{ __html: mathML }}></div>
    );
};

export default DangMath;