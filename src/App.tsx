import "./App.css";

import { Sum } from "./components/sum/Sum";
import { SumWithCssAlias } from "./components/sum/SumWithCssAlias";
import { SumWithAscii } from "./components/sum/SumWithAscii";

export { Sum }; // for <Sum /> usage
export { SumWithCssAlias }; // for <SumWithCssAlias /> usage
export { SumWithAscii }; // for <SumWithAscii /> usage

// This needed for further usage by consumer code as <App.*** />
const App = {
  Sum, // for <App.Sum /> usage
  SumWithCssAlias, // for <App.SumWithCssAlias /> usage
  SumWithAscii, // for <App.SumWithAscii /> usage
};

export default App;
