import type { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from './footer.component';

const meta: Meta<FooterComponent> = {
  title: 'Layout/Footer',
  component: FooterComponent,
  args: { background: '#222c1d' }
};
export default meta;
type Story = StoryObj<FooterComponent>;

export const Default: Story = {};
export const LightBackground: Story = { args: { background: '#111827' } };
