import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderToolsComponent } from './header-tools.component';

const meta: Meta<HeaderToolsComponent> = {
  title: 'Navigation/HeaderTools',
  component: HeaderToolsComponent,
  args: { showSearch: true, showBurger: true },
  parameters: { backgrounds: { default: 'Dark Hero' } }
};
export default meta;
type Story = StoryObj<HeaderToolsComponent>;

export const Default: Story = {};
export const SearchOnly: Story = { args: { showBurger: false } };
export const BurgerOnly: Story = { args: { showSearch: false } };
