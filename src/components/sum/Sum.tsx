import React from "react";
// import { DangMath } from "../ascii-math-2021/DangMath"; // when using DangMath import, then Sum.default doesn't exists. Removing "optimization" and adding "externals" helps.
import sigmaImg from "../../assets/images/sigma.png"; // using imported image is OK. Sum.default exists.

import style from "./Sum.module.css";
import { DangMath } from "../ascii-math-2021/DangMath";
import type { SumProps } from "./common";

export const Sum = (props: SumProps) => {
  const getPieceToRender = () => {
    const { a, b, useImages, useASCII } = props;
    const result = a + b;

    let pieceToRender = (
      <React.Fragment>
        <h1 className="title">Sum</h1>
        <h3 className="result">
          {a} + {b} = {result}
        </h3>
      </React.Fragment>
    );

    if (useImages) {
      // TODO use dynamic import()
      pieceToRender = (
        <React.Fragment>
          <img src={sigmaImg} alt="sigma" />
          {/* <h3>{a} + {b} <div className={style['.sum .equal']}></div> {result}</h3> */}
          <h3>
            {a} + {b} <div className={style.equal}></div> {result}
          </h3>
          {/*
            Gives:
            .ReactSum_sum__3UcGT .ReactSum_equal__28Cxi
            So we can rely on CSS classes hierarchy (".sum .equal") but pass ONLY last css class (".equal").
              */}
        </React.Fragment>
      );
    }

    if (useASCII) {
      // TODO use dynamic import()
      pieceToRender = (
        <React.Fragment>
          <h1>Sum</h1>
          <span>
            w <code>ascii-math</code> (2021 approach)
          </span>
          <DangMath a={a} b={b} c={result} />
        </React.Fragment>
      );
    }

    return pieceToRender;
  };

  return (
    // <div className="sum">
    <div className={style.sum}>{getPieceToRender()}</div>
  );
};
