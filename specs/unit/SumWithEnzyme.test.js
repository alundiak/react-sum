import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
// import Sum from '../../src/components/Sum';
import Sum from '../../dist/Sum';

it('Sum renders without crashing (shallow test)', () => {
  const wrapper = shallow((
    <Sum />
  ));
  expect(wrapper.contains(<div className="title" />)).to.equal(true);
  expect(wrapper.contains(<div className="result" />)).to.equal(true);
});