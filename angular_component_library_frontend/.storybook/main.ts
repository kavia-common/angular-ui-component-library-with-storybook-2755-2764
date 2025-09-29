import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/app/components/**/*.stories.@(ts|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  core: { disableTelemetry: true }
};
export default config;
