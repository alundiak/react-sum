import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Sum from 'components/Sum';
import DangMath from 'components/DangMath';

import { version } from '../package';

addDecorator(withInfo); // global

storiesOf(`Sum v${version}`, module)
  .add('2+2 (default)', () => <Sum onClick={action('clicked')} />)
  .add('custom numbers', () => <Sum a={3} b={3} />)
  .add('negative numbers', () => <Sum a={3} b={-2} />)
  .add('negative numbers (=> 0)', () => <Sum a={3} b={-3} />)
  .add('useImages', () => <Sum a={4} b={4} useImages />)
  .add('useASCII', () => <Sum a={5} b={5} useASCII />);

storiesOf('DangMath', module)
  .add('simple usage', () => <DangMath a={8} b={8} c={16} />);