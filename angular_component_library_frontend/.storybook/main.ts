import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/angular',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    disableTelemetry: true
  }
};

export default config;
