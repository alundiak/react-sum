import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import parse from 'ascii-math';

import '../css/react-sum.less';
import '../css/with-ascii.css';

class SumWithAscii extends React.Component {
    state = {
        // TODO - create input fields and take values for interactive Sum()
    }

    getAsciiCode = (/* a, b */) => {
        // const res = parse(`sum(${a}+${b})=c`);
        const res = parse('sum(a+b)=c');
        const mathCodeStr = res.toString();
        console.log(mathCodeStr);

        const mathElement = res.toElement();
        console.log(mathElement, React.isValidElement(mathElement), typeof mathElement);

        // const Sym = Symbol(mathElement);
        // console.log(Sym, typeof(Sym));

        // console.log(<mathElement />);

        // const newElem = ReactDOM.render(mathElement);
        // console.log(newElem);

        const MathElem = React.createElement(mathElement);

        console.log(React.isValidElement(MathElem), typeof MathElem);

        // const Elem = <div>abc</div>;
        // console.log(Elem, typeof Elem );

        // console.log(ResultMathMlCode, typeof (ResultMathMlCode));
        // console.log(<ResultMathMlCode />, typeof (<ResultMathMlCode />));
        // console.log(<MathML />, typeof (<MathML />));

        // return (<math title="sum(10+133)=c"><mo>&sum;</mo><mrow><mo>(</mo><mn>10</mn><mo>+</mo><mn>133</mn><mo>)</mo></mrow><mo>=</mo><mi>c</mi></math>);
        return MathElem;
    }

    render() {
        const { a, b } = this.props;
        const result = a + b;
        const { useASCII } = this.props;

        const res = parse('sum(a+b)=c');
        const mathElement = res.toElement();
        const MathElem1 = React.createElement(mathElement);
        const MathElem2 = React.createElement('div', mathElement);
        console.log(MathElem1, MathElem2);

        return (
            <div className="sum">
                {useASCII ? (
                    <div>todo</div>
                ) : (
                    <div>
                        <h1>Sum</h1>
                        <h3>{a} + {b} = {result}</h3>
                    </div>
                )}
            </div>
        );
    }
}

SumWithAscii.propTypes = {
    a: PropTypes.number,
    b: PropTypes.number,
    useASCII: PropTypes.bool
};

SumWithAscii.defaultProps = {
    a: 2,
    b: 2,
    useASCII: false
};

export default Sum;
