import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'Dark Hero',
      values: [
        { name: 'Dark Hero', value: '#0b1220' },
        { name: 'Light Surface', value: '#ffffff' },
        { name: 'Ocean BG', value: '#f9fafb' }
      ]
    },
    layout: 'centered'
  }
};

export default preview;
