import React from 'react';
import { storiesOf, addDecorator/* , addParameters */ } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
// import { linkTo } from '@storybook/addon-links';

// TODO
// import withVersion from '../addons/index';
// import { version } from '../../package';
// TODO

import Sum from '../components/Sum';
import SumWithCssAlias from '../components/SumWithCssAlias';

// global
addDecorator(withInfo);

// see config.js (_old/.storybook/config.js approach)
// addDecorator(withVersion);
// addParameters({
//   version
// });
// see config.js

// global

const version = '1.3.0'; // TODO
const group1 = `(v${version})/`;
// const group1 = 'Components/';
// const group1 = '';

storiesOf(group1 + 'Sum', module)
  // .addDecorator(withInfo)
  .add('2+2 (default)', () => <Sum onClick={action('clicked')} />, {
    notes: "Hello",
    // version, // also works, but global is better.
  });

storiesOf(group1 + 'SumWithCssAlias', module)
  .add('default logic', () => <SumWithCssAlias />);

