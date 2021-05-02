import React from 'react';
import { storiesOf } from '@storybook/react';

import DangMath from '../components/DangMath';

storiesOf('Other/DangMath', module)
  .add('simple usage', () => <DangMath a={8} b={8} c={16} />);