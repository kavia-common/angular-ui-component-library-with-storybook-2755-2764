import type { Meta, StoryObj } from '@storybook/angular';
import { SectionHeadingComponent } from './section-heading.component';

const meta: Meta<SectionHeadingComponent> = {
  title: 'Content/SectionHeading',
  component: SectionHeadingComponent,
  args: {
    title: 'Our Trendy plants',
    icon: 'assets/figmaimages/figma_image_22_62.png'
  }
};
export default meta;
type Story = StoryObj<SectionHeadingComponent>;

export const Default: Story = {};
export const WithoutIcon: Story = { args: { icon: undefined } };
