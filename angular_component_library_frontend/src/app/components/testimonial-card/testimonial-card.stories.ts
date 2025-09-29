import type { Meta, StoryObj } from '@storybook/angular';
import { TestimonialCardComponent } from './testimonial-card.component';

const meta: Meta<TestimonialCardComponent> = {
  title: 'Content/TestimonialCard',
  component: TestimonialCardComponent,
  args: {
    avatar: 'assets/figmaimages/figma_image_22_152.png',
    name: 'Maln Josi',
    rating: 4.5,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
};
export default meta;
type Story = StoryObj<TestimonialCardComponent>;

export const Default: Story = {};
export const FiveStars: Story = { args: { rating: 5 } };
export const ThreeStars: Story = { args: { rating: 3 } };
