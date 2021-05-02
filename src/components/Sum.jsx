import React from 'react';
import PropTypes from 'prop-types';
import DangMath from './DangMath'; // when using DangMath import, then Sum.default doesn't exists. Removing "optimization" and adding "externals" helps.
import sigmaImg from '../images/sigma.png'; // using imported image is OK. Sum.default exists.
// import sigmaImg from 'img/sigma.png'; // also works. But will require react-experiments to provide an webpack alias.

// import '../css/react-sum.css';
import style from '../css/ReactSum.module.css';

/* eslint react/self-closing-comp: 0 */
class Sum extends React.Component {
    state = {
        // TODO - create input fields and take values for interactive Sum()
    }

    getPieceToRender = () => {
        const { a, b, useImages, useASCII } = this.props;
        const result = a + b;

        let pieceToRender = (
            <React.Fragment>
                <h1 className="title">Sum</h1>
                <h3 className="result">{a} + {b} = {result}</h3>
            </React.Fragment>
        );

        if (useImages) {
            // TODO use dynamic import()
            pieceToRender = (
                <React.Fragment>
                    <img src={sigmaImg} alt="sigma" />
                    {/* <h3>{a} + {b} <div className={style['.sum .equal']}></div> {result}</h3> */}
                    <h3>{a} + {b} <div className={style.equal}></div> {result}</h3>
                </React.Fragment>
            );
        }

        if (useASCII) {
            // TODO use dynamic import()
            pieceToRender = (
                <React.Fragment>
                    <DangMath a={a} b={b} c={result} />
                </React.Fragment>
            );
        }

        return pieceToRender;
    };

    render() {
        return (
            // <div className="sum">
            <div className={style.sum}>
                {this.getPieceToRender()}
            </div>
        );
    }
}

Sum.propTypes = {
    a: PropTypes.number,
    b: PropTypes.number,
    useImages: PropTypes.bool,
    useASCII: PropTypes.bool
};

Sum.defaultProps = {
    a: 2,
    b: 2,
    useImages: false,
    useASCII: false
};

export default Sum;
