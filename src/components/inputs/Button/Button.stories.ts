import type { Meta, StoryObj } from '@storybook/react';

import Button, { colorOptions, widthOptions }  from './Button';

const meta = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: colorOptions},
    width: { control: 'select', options: widthOptions},
    
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Proclaimer: Story = {
  args: {
    children: 'Proclaimer',
  },
};

export const Orderly: Story = {
  args: {

    color: 'orderly',
    children: 'Orderly',
  },
};

export const Full: Story = {
  args: {
    width: 'full',
    children: 'Full',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};
