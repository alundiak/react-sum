import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Sum from '../../components/Sum';

// import Sum from '../../../dist/Sum';
// not sure how proper is to unit-test dist/built version of component.
// that would be integration test I assume.

it('<Sum> renders without crashing (approach 1)', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sum />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('<Sum> renders without crashing (approach 2)', () => {
  const { container } = render(<Sum />);
  const el = container.querySelector('.sum');
  expect(el).toBeInTheDocument();
  const el2 = container.querySelector('.title');
  expect(el2).toBeInTheDocument();
  const el3 = container.querySelector('.result');
  expect(el3).toBeInTheDocument();
});