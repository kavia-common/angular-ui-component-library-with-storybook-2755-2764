import type { Meta, StoryObj } from '@storybook/angular';
import { BrandLogoComponent } from './brand-logo.component';

const meta: Meta<BrandLogoComponent> = {
  title: 'Foundations/BrandLogo',
  component: BrandLogoComponent,
  args: {
    label: 'Planto.',
    src: 'assets/figmaimages/figma_image_17_174.png',
    size: 48
  }
};
export default meta;
type Story = StoryObj<BrandLogoComponent>;

export const Default: Story = {};
export const Large: Story = { args: { size: 72 } };
export const CustomText: Story = { args: { label: 'Planto X' } };
