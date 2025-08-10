import { render, screen } from '@testing-library/react';
import App, { Sum, SumWithCssAlias } from '../App';

test('imports App', () => {
  expect(typeof App).toEqual('object')
  expect(Object.keys(App)).toEqual(['Sum', 'SumWithCssAlias'])
});

test('imports Sum', () => {
  expect(typeof Sum).toEqual('function')
});

test('imports SumWithCssAlias', () => {
  expect(typeof SumWithCssAlias).toEqual('function')
});

test('renders <Sum>', () => {
  const { container } = render(<Sum />);
  const el = container.querySelector('.sum');
  expect(el).toBeInTheDocument();

  const title = screen.getByText('Sum');
  expect(title).toBeInTheDocument();
});

test('renders <App.Sum>', () => {
  const { container } = render(<App.Sum />);
  const el = container.querySelector('.sum');
  expect(el).toBeInTheDocument();

  const title = screen.getByText('Sum');
  expect(title).toBeInTheDocument();
});

test('renders <SumWithCssAlias>', () => {
  const { container } = render(<SumWithCssAlias />);
  const el = container.querySelector('.with-alias');
  expect(el).toBeInTheDocument();

  const title = screen.getByText('Sum (w alias)');
  expect(title).toBeInTheDocument();
});

test('renders <App.SumWithCssAlias>', () => {
  const { container } = render(<App.SumWithCssAlias />);
  const el = container.querySelector('.with-alias');
  expect(el).toBeInTheDocument();

  const title = screen.getByText('Sum (w alias)');
  expect(title).toBeInTheDocument();
});
