import type { Meta, StoryObj } from '@storybook/angular';
import { NavMenuComponent } from './nav-menu.component';

const meta: Meta<NavMenuComponent> = {
  title: 'Navigation/NavMenu',
  component: NavMenuComponent,
  args: {
    items: [
      { label: 'Home' },
      { label: 'Plant Type’s', hasDropdown: true },
      { label: 'More' },
      { label: 'Contact' },
    ]
  },
  parameters: { backgrounds: { default: 'Dark Hero' } }
};
export default meta;
type Story = StoryObj<NavMenuComponent>;

export const Default: Story = {};
export const WithDropdowns: Story = {
  args: {
    items: [
      { label: 'Home', hasDropdown: true },
      { label: 'Plants', hasDropdown: true },
      { label: 'More' },
      { label: 'Contact' },
    ]
  }
};
