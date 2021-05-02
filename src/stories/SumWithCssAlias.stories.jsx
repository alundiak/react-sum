import React from 'react';
import { storiesOf } from '@storybook/react';
import SumWithCssAlias from '../components/SumWithCssAlias';
import markdownNotes from './componentNote1.md';

storiesOf('Components/SumWithCssAlias', module)
  .add('default logic', () => <SumWithCssAlias />)
  .add('custom numbers', () => <SumWithCssAlias a={6} b={6} />)
  .add('custom numbers (with notes)', () => <SumWithCssAlias a={7} b={7} />, {
    // notes: 'A very simple example of addon notes'
    notes: {
      Intro: 'A very simple example of addon notes',
      Design: markdownNotes
    }
  });