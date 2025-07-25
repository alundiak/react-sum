import { AsciiMath } from "asciimath-parser";
import katex from "katex";

import "katex/dist/katex.min.css";
// But it brings lot of font files to bundle (and not even all)

// import "./minimal-katex.css";
// This approach brings custom fonts. But Size3-Regular goes as base64, for SOME REASON.
// But still NOT ENOUGH for proper rendering

// import "katex/dist/fonts/KaTeX_Size3-Regular.woff2";
// This also DOES NOT force to copy file :(

// Looks like katex BUG - I created
// https://github.com/KaTeX/KaTeX/issues/4065

const am = new AsciiMath();

interface AsciiMath2025Props {
  expr: string;
}

export default function AsciiMath2025({ expr }: AsciiMath2025Props) {
  const tex: string = am.toTex(expr);

  const html: string = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: true,
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
