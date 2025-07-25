import parse from "ascii-math";

// import style from './DangMath.module.css';
import "./DangMath.module.css";

interface DangMathProps {
  a: number;
  b: number;
  c: number;
}

export const DangMath = (props: DangMathProps) => {
  const { a, b, c } = props;
  const res = parse(`sum(${a}+${b})=${c}`);
  const mathML = res.toString();

  return (
    // <div className={style['with-ascii']} dangerouslySetInnerHTML={{ __html: mathML }}></div>
    // with-ascii just a css class with no implementation
    <>
      <div
        className={"with-ascii"}
        dangerouslySetInnerHTML={{ __html: mathML }}
      ></div>
    </>
  );
};
