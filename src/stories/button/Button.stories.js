import React from 'react';

import { Button } from './Button';

export default {
  // https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#removed-hierarchy-separators
  // https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#simplified-hierarchy-separators
  title: 'Storybook Examples/Button(2)',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
