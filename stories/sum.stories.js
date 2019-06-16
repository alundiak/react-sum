import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import Sum from '../src/components/Sum';
import SumWithCssAlias from 'components/SumWithCssAlias';
// import SumWithAscii from 'components/SumWithAscii';
import DangMath from 'components/DangMath';

storiesOf('Sum', module)
  .add('2+2 (default)', () => <Sum />)
  .add('custom numbers', () => <Sum a={3} b={3} />)
  .add('negative numbers', () => <Sum a={3} b={-2} />)
  .add('negative numbers (=> 0)', () => <Sum a={3} b={-3} />)
  .add('useImages', () => <Sum a={4} b={4} useImages />)
  .add('useASCII', () => <Sum a={5} b={5} useASCII />);

storiesOf('Sum with alias', module)
  .add('default logic', () => <SumWithCssAlias a={6} b={6} />)
  .add('custom numbers', () => <SumWithCssAlias a={7} b={7} />);

storiesOf('DangMath', module)
  .add('simple usage', () => <DangMath a={8} b={8} c={16} />);