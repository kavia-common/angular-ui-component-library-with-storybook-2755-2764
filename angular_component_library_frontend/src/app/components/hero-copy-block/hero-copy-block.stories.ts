import type { Meta, StoryObj } from '@storybook/angular';
import { HeroCopyBlockComponent } from './hero-copy-block.component';

const meta: Meta<HeroCopyBlockComponent> = {
  title: 'Hero/HeroCopyBlock',
  component: HeroCopyBlockComponent,
  parameters: { backgrounds: { default: 'Dark Hero' } }
};
export default meta;
type Story = StoryObj<HeroCopyBlockComponent>;

export const Default: Story = {};
export const NoDemo: Story = { args: { showDemo: false } };
