import React from 'react';
import parse from 'ascii-math';

// import style from '../css/WithAscii.module.css';
import '../css/WithAscii.module.css';

const DangMath = (props) => {
    const { a, b, c } = props;
    const res = parse(`sum(${a}+${b})=${c}`);
    const mathML = res.toString();

    /* eslint react/self-closing-comp: 0 */
    /* eslint react/no-danger: 0 */
    return (
        // <div className={style['with-ascii']} dangerouslySetInnerHTML={{ __html: mathML }}></div>
        // with-ascii just a css class with no implementation
        <div className={'with-ascii'} dangerouslySetInnerHTML={{ __html: mathML }}></div>
    );
};

export default DangMath;