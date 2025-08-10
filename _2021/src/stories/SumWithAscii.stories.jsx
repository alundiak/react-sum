import React from 'react';
import { storiesOf } from '@storybook/react';
import SumWithAscii from '../components/SumWithAscii';

storiesOf('Components/SumWithAscii', module)
  .add('default logic', () => <SumWithAscii />)
  .add('custom numbers', () => <SumWithAscii a={6} b={6} />);
