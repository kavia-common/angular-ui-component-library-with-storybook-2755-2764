import type { Meta, StoryObj } from '@storybook/angular';
import { PromoBandComponent } from './promo-band.component';

const meta: Meta<PromoBandComponent> = {
  title: 'Marketing/PromoBand',
  component: PromoBandComponent,
  args: {
    accentImage: 'assets/figmaimages/figma_image_22_195.png',
    lines: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    ],
    pager: '01/04'
  }
};
export default meta;
type Story = StoryObj<PromoBandComponent>;

export const Default: Story = {};
