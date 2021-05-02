import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../App';

const group2 = 'Usage/App';
storiesOf(group2, module)
  .add('<App.Sum>', () => <App.Sum />)
storiesOf(group2, module)
  .add('<App.SumWithCssAlias/>', () => <App.SumWithCssAlias />)