import type { Meta, StoryObj } from '@storybook/angular';
import { AppHeaderComponent } from './app-header.component';
import { BrandLogoComponent } from '../brand-logo/brand-logo.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { HeaderToolsComponent } from '../header-tools/header-tools.component';

const meta: Meta<AppHeaderComponent> = {
  title: 'Navigation/AppHeader',
  component: AppHeaderComponent,
  decorators: [],
  parameters: { backgrounds: { default: 'Dark Hero' } }
};
export default meta;
type Story = StoryObj<AppHeaderComponent>;

export const Default: Story = { args: { translucent: true } };
export const Solid: Story = { args: { translucent: false } };
