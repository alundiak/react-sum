import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { shallow } from 'enzyme';
// import Sum from '../../src/components/Sum';
import Sum from '../../dist/Sum';

// Note: CWD for loadFeature() is <root>. So don't use "../.."
const feature = loadFeature('./specs/features/Sum.feature');

defineFeature(feature, test => {
    test('adds x and y to equal sum', ({ given, when, then }) => {
        let SumWrapper;
        let a, b;
        given(/^x is (\d+) and y is (\d+)$/, (xStr, yStr) => {
            a = parseInt(xStr, 10);
            b = parseInt(yStr, 10);
        });
        when('component rendered', () => {
            SumWrapper = shallow(<Sum a={a} b={b} />);
            expect(SumWrapper.find('.sum')).toHaveLength(1);
        });
        then(/^with result (\d+)$/, (result) => {
            expect(SumWrapper.find('.sum .result').text()).toEqual(`2 + 2 = ${parseInt(result, 10)}`);
        });
    })

    test('adds x and y to equal sum (multiple use cases)', ({ given, when, then }) => {
        let SumWrapper;
        let a, b;
        given(/^x is (-?\d+) and y is (-?\d+)$/, (xStr, yStr) => {
            a = parseInt(xStr, 10);
            b = parseInt(yStr, 10);
        });
        when('component rendered', () => {
            SumWrapper = shallow(<Sum a={a} b={b} />);
            expect(SumWrapper.find('.sum')).toHaveLength(1);
        });
        then(/^with result (-?\d+)$/, (result) => {
            const sum = parseInt(result, 10);
            const receivedText = SumWrapper.find('.sum .result').text();
            const expectedText = `${a} + ${b} = ${sum}`;
            expect(receivedText).toEqual(expectedText);
        });
    })
})