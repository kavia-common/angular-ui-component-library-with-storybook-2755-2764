import type { Meta, StoryObj } from '@storybook/angular';
import { ProductCardComponent } from './product-card.component';

const meta: Meta<ProductCardComponent> = {
  title: 'Commerce/ProductCard',
  component: ProductCardComponent,
  args: {
    image: 'assets/figmaimages/figma_image_22_96.png',
    title: 'Calathea plant',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'Rs. 309/-',
    addIcon: 'assets/figmaimages/figma_image_22_100.png',
    addSymbol: 'assets/figmaimages/figma_image_22_101.png'
  }
};
export default meta;
type Story = StoryObj<ProductCardComponent>;

export const Default: Story = {};
export const NoAddIcon: Story = { args: { addIcon: '', addSymbol: '' } };
