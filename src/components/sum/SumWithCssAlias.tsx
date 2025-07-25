import type { SumProps } from "./common";

import style1 from "./Sum.module.css";
import style2 from "./WithAlias.module.css";
// what was the reason? Just additional CSS class?

export const SumWithCssAlias = (props: SumProps) => {
  const { a, b } = props;
  const result = a + b;

  return (
    <div className={style1.sum}>
      <h1 className={style2["with-alias"]}>Sum (w alias)</h1>
      <h3>
        {a} + {b} = {result}
      </h3>
    </div>
  );
};
