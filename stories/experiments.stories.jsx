import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
// import { linkTo } from '@storybook/addon-links';

import Sum from '../src/components/Sum';
import SumWithCssAlias from 'components/SumWithCssAlias';
// import SumWithAscii from 'components/SumWithAscii';
import DangMath from 'components/DangMath';
import App from 'components/App';

import { version } from '../package';
import markdownNotes from './componentNote1.md';

addDecorator(withInfo); // global

// const group = `Component (v${version})|`;
// const group = 'Components|';
const group = '';

storiesOf(group + 'Sum', module)
  // .addDecorator(withInfo)
  .add('2+2 (default)', () => <Sum onClick={action('clicked')} />, {
    notes: "Hello",
    myAddon: {
      data: 'this data is passed to the addon',
    }
  })
  .add('custom numbers', () => <Sum a={3} b={3} />)
  .add('negative numbers', () => <Sum a={3} b={-2} />)
  .add('negative numbers (=> 0)', () => <Sum a={3} b={-3} />)
  .add('useImages', () => <Sum a={4} b={4} useImages />)
  .add('useASCII', () => <Sum a={5} b={5} useASCII />);

storiesOf(group + 'Sum with alias', module)
  .add('default logic', () => <SumWithCssAlias a={6} b={6} />)
  .add('custom numbers (with notes)', () => <SumWithCssAlias a={7} b={7} />, {
    // notes: 'A very simple example of addon notes'
    notes: {
      Intro: 'A very simple example of addon notes',
      Design: markdownNotes
    }
  });

storiesOf('HelpersA|DangMath', module)
  .add('simple usage', () => <DangMath a={8} b={8} c={16} />);

storiesOf('HelpersA|App.Sum', module)
  .add('2+2', () => <App.Sum />)
storiesOf('HelpersA|App.SumWithCssAlias', module)
  .add('2+2', () => <App.SumWithCssAlias />)


storiesOf('HelpersB v1.2.3', module)
  .add('DangMath  simple usage', () => <DangMath a={8} b={8} c={16} />)
  .add('App/Sum 2+2', () => <App.Sum />)
  .add('App/SumWithCssAlias 2+2', () => <App.SumWithCssAlias />) // "/" doesn't work for story


storiesOf('HelpersC v6.7.8/DangMath', module) // "/" works only for "kind".
  .add('simple usage', () => <DangMath a={8} b={8} c={16} />);

storiesOf('HelpersC v6.7.8/App.Sum', module)
  .add('2+2', () => <App.Sum />)
storiesOf('HelpersC v6.7.8/App.SumWithCssAlias', module)
  .add('2+2', () => <App.SumWithCssAlias />)