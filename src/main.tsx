import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App, { Sum, SumWithCssAlias, SumWithAscii } from "./App";
// import AsciiMath2025 from "./components/ascii-math-2025/AsciiMath2025";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App.Sum a={2} b={2} />

    <Sum a={3} b={3} />

    <Sum a={4} b={4} />
    <Sum a={5} b={5} />
    <Sum a={6} b={6} />

    <Sum a={7} b={7} useImages />
    <Sum a={8} b={8} useImages useASCII />

    <App.SumWithCssAlias a={2} b={2} />
    <SumWithCssAlias a={3} b={3} />
    <SumWithAscii a={4} b={4} />

    <div>
      {/* <span>
        <code>asciimath-parser</code> - 2025 approach
      </span> */}

      {/* <AsciiMath2025 expr="sum (2 + 2) = 4" /> */}
      {/* <AsciiMath2025 expr="sum_(n=1)^oo 1/n^2 = (pi^2)/6" /> */}
      {/* <AsciiMath2025 expr="sqrt(a^2 + b^2) = c" /> */}
      {/* <AsciiMath2025 expr="x^2 + 2x + 1 = 0" /> */}
      {/* <AsciiMath2025 expr="int_0^1 x^2 dx = 1/3" /> */}
      {/* <AsciiMath2025 expr="lim_(x->0) (sinx)/x = 1" /> */}
    </div>
  </StrictMode>
);
