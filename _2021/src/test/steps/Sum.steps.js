import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';

// import { shallow } from 'enzyme';
// https://testing-library.com/docs/react-testing-library/migrate-from-enzyme/

// https://testing-library.com/docs/dom-testing-library/api-custom-queries/#getnodetext
import { render, screen, getNodeText } from '@testing-library/react';

import Sum from '../../components/Sum';
// import Sum from '../../../dist/Sum'; // TODO

// Note: CWD for loadFeature() is <root>. So don't use "../.."
const feature = loadFeature('src/test/features/Sum.feature');

defineFeature(feature, test => {
  test('adds x and y to equal sum', ({ given, when, then }) => {
    // let SumWrapper;
    let container;
    let a, b;

    given(/^x is (\d+) and y is (\d+)$/, (xStr, yStr) => {
      a = parseInt(xStr, 10);
      b = parseInt(yStr, 10);
    });

    when('component rendered', () => {
      // SumWrapper = shallow(<Sum a={a} b={b} />);
      ({ container } = render(<Sum a={a} b={b} />));
      // expect(SumWrapper.find('.sum')).toHaveLength(1);
      expect(container.querySelector('.sum')).toBeInTheDocument();
    });

    then(/^with result (\d+)$/, (result) => {
      // expect(SumWrapper.find('.sum .result').text()).toEqual(`2 + 2 = ${parseInt(result, 10)}`);
      expect(getNodeText(container.querySelector('.sum .result'))).toEqual(`2 + 2 = ${parseInt(result, 10)}`);
    });
  })

  test('adds x and y to equal sum (multiple use cases)', ({ given, when, then }) => {
    // let SumWrapper;
    let container;
    let a, b;

    given(/^x is (-?\d+) and y is (-?\d+)$/, (xStr, yStr) => {
      a = parseInt(xStr, 10);
      b = parseInt(yStr, 10);
    });

    when('component rendered', () => {
      // SumWrapper = shallow(<Sum a={a} b={b} />);
      ({ container } = render(<Sum a={a} b={b} />));
      // expect(SumWrapper.find('.sum')).toHaveLength(1);
      expect(container.querySelector('.sum')).toBeInTheDocument();
    });

    then(/^with result (-?\d+)$/, (result) => {
      const sum = parseInt(result, 10);
      // const receivedText = SumWrapper.find('.sum .result').text();
      const receivedText = getNodeText(container.querySelector('.sum .result'));
      const expectedText = `${a} + ${b} = ${sum}`;
      expect(receivedText).toEqual(expectedText);
    });
  })
})