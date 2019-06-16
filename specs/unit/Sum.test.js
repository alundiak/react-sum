import React from 'react';
import ReactDOM from 'react-dom';
// import Sum from '../../src/components/Sum';
import Sum from '../../dist/Sum';

it('Sum renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sum />, div);
  ReactDOM.unmountComponentAtNode(div);
});