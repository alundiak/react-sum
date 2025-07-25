// import parse from "ascii-math";
import React from "react";
import { DangMath } from "../ascii-math-2021/DangMath";
import type { SumProps } from "./common";

import style1 from "./Sum.module.css";
import { Sum } from "./Sum";
import "./WithAscii.module.css";

export const SumWithAscii = (props: SumProps) => {
  const { a, b } = props;

  // const res = parse("sum(a+b)=c");

  //
  // NOT VALID ELEMENT, not rendered
  //
  // const mathElement = res.toElement(); // this seems to be valid DOM/HTML element, but it's not valid JSX/React element.
  // console.log(mathElement, typeof mathElement, React.isValidElement(mathElement)); // not valid
  // console.log(<mathElement />, typeof <mathElement />, React.isValidElement(<mathElement/ >)); // valid but not rendered
  // const MathML = () => (
  //     <div>
  //         {mathElement}
  //     </div>
  // );

  // console.log(MathML, typeof MathML, React.isValidElement(MathML));
  // console.log(<MathML />, typeof <MathML />, React.isValidElement(<MathML/ >));

  // console.log(mathElement, typeof mathElement, React.isValidElement(mathElement));
  // console.log(Symbol(mathElement), typeof Symbol(mathElement), React.isValidElement(Symbol(mathElement)));

  //
  // VALID ELEMENT, but not rendered
  //
  // const DivMathElem = React.createElement('div', null, mathElement);
  // console.log(DivMathElem, typeof DivMathElem, React.isValidElement(DivMathElem));

  // const ClonedElem = React.cloneElement(DivMathElem);
  // console.log(ClonedElem, typeof ClonedElem, React.isValidElement(ClonedElem));

  //
  // VALID ELEMENT and rendered
  //

  // const Elem = (<div><span>abc</span></div>);
  // console.log(Elem, typeof Elem, React.isValidElement(Elem));

  // const rawJsxElement = (<math title="sum(10+133)=c"><mo>&sum;</mo><mrow><mo>(</mo><mn>10</mn><mo>+</mo><mn>133</mn><mo>)</mo></mrow><mo>=</mo><mi>c</mi></math>);
  // Content taken from res.toString()
  // console.log(rawJsxElement, typeof rawJsxElement, React.isValidElement(rawJsxElement));

  // console.log(DangMath, typeof DangMath, React.isValidElement(DangMath));

  const experiments = false;

  return (
    <div className={style1.sum}>
      {experiments ? (
        <React.Fragment>
          {/* <MathML /> */}
          {/* {DivMathElem} */}
          {/* {ClonedElem} */}
          {/* {Elem} */}
          {/* {rawJsxElement} */}
          <DangMath a={a} b={b} c={a + b} />
        </React.Fragment>
      ) : (
        <Sum a={a} b={b} useASCII />
      )}
    </div>
  );
};
