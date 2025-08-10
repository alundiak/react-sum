import type { Story } from "@ladle/react";
import { Sum, SumWithAscii, SumWithCssAlias } from "../App";

type SumProps = { aParam: number; bParam: number };

export const SumStory: Story<SumProps> = ({ aParam, bParam }) => {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Sum a={aParam} b={bParam}></Sum>
    </div>
  );
};

SumStory.args = { aParam: 2, bParam: 2 };

export const SumWithAsciiStory: Story<SumProps> = ({ aParam, bParam }) => {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <SumWithAscii a={aParam} b={bParam}></SumWithAscii>
    </div>
  );
};

SumWithAsciiStory.args = { aParam: 3, bParam: 3 };

export const SumWithCssAliasStory: Story<SumProps> = ({ aParam, bParam }) => {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <SumWithCssAlias a={aParam} b={bParam} />
    </div>
  );
};

SumWithCssAliasStory.args = { aParam: 4, bParam: 4 };
