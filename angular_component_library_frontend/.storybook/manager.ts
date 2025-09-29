import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'Angular Component Library',
  brandUrl: '#',
  brandImage: undefined,
  colorPrimary: '#2563EB',
  colorSecondary: '#F59E0B',
  appBg: '#f9fafb',
  appContentBg: '#ffffff',
  appBorderColor: '#e5e7eb',
  barTextColor: '#111827',
  barSelectedColor: '#2563EB',
  barBg: '#ffffff',
  textColor: '#111827',
  textMutedColor: '#6b7280',
  inputBg: '#ffffff',
  inputBorder: '#e5e7eb',
  appBorderRadius: 12,
});

addons.setConfig({ theme });
