import type { Meta, StoryObj } from '@storybook/angular';
import { HeroCardComponent } from './hero-card.component';

const meta: Meta<HeroCardComponent> = {
  title: 'Hero/HeroCard',
  component: HeroCardComponent
};
export default meta;
type Story = StoryObj<HeroCardComponent>;

export const Default: Story = {};
export const Alternative: Story = {
  args: {
    eyebrow: 'Limited Collection',
    title: 'Desk Plant',
    cta: 'Add to Cart'
  }
};
