import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Sum, SumWithCssAlias } from './App';
import reportWebVitals from './reportWebVitals';

const Main = () => (
  <React.Fragment>
    <App.Sum />
    <App.SumWithCssAlias />

    <Sum a={3} b={3} />
    <SumWithCssAlias a={4} b={4} />

    <Sum a={3} b={3} />
    <Sum a={2} b={-2} />
    <Sum a={2} b={-3} />

    <Sum a={33} b={33} useImages />

    {/* <Sum a={44} b={44} useASCII /> */}

  </React.Fragment>
);

ReactDOM.render(
  <React.StrictMode>
    <Main className="main-container" />
  </React.StrictMode>,
  document.getElementById('react-sum')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
