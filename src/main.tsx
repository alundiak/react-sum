import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App, { Sum } from "./App";
// import AsciiMath2025 from "./components/ascii-math-2025/AsciiMath2025";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App.Sum a={2} b={2} />
    {/* <App.SumWithCssAlias /> */}

    <Sum a={3} b={3} />
    {/* <SumWithCssAlias a={4} b={4} /> */}

    <Sum a={3} b={3} />
    <Sum a={2} b={-2} />
    <Sum a={2} b={-3} />

    <Sum a={33} b={33} useImages />
    <Sum a={44} b={44} useImages useASCII />

    <div>
      <h2>
        <code>asciimath-parser</code> - 2025 approach
      </h2>

      {/* <AsciiMath2025 expr="sum (2 + 2) = 4" /> */}
      {/* <AsciiMath2025 expr="sum_(n=1)^oo 1/n^2 = (pi^2)/6" /> */}
      {/* <AsciiMath2025 expr="sqrt(a^2 + b^2) = c" /> */}
      {/* <AsciiMath2025 expr="x^2 + 2x + 1 = 0" /> */}
      {/* <AsciiMath2025 expr="int_0^1 x^2 dx = 1/3" /> */}
      {/* <AsciiMath2025 expr="lim_(x->0) (sinx)/x = 1" /> */}
    </div>
  </StrictMode>
);
