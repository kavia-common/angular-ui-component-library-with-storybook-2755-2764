import type { Meta, StoryObj } from '@storybook/angular';
import { ProductGridComponent } from './product-grid.component';

const meta: Meta<ProductGridComponent> = {
  title: 'Commerce/ProductGrid',
  component: ProductGridComponent,
  args: {
    items: [
      { image: 'assets/figmaimages/figma_image_22_96.png', title: 'Calathea plant', description: 'Lorem ipsum dolor sit amet', price: 'Rs. 309/-' },
      { image: 'assets/figmaimages/figma_image_22_96.png', title: 'Desk plant', description: 'Lorem ipsum dolor sit amet', price: 'Rs. 359/-' },
      { image: 'assets/figmaimages/figma_image_22_96.png', title: 'Calathea ai plant', description: 'Lorem ipsum dolor sit amet', price: 'Rs. 399/-' },
      { image: 'assets/figmaimages/figma_image_22_96.png', title: 'Cal 874 plant', description: 'Lorem ipsum dolor sit amet', price: 'Rs. 259/-' },
      { image: 'assets/figmaimages/figma_image_22_96.png', title: 'Show plant', description: 'Lorem ipsum dolor sit amet', price: 'Rs. 759/-' },
      { image: 'assets/figmaimages/figma_image_22_96.png', title: 'Calat O2 plant', description: 'Lorem ipsum dolor sit amet', price: 'Rs. 659/-' },
    ]
  }
};
export default meta;
type Story = StoryObj<ProductGridComponent>;

export const Default: Story = {};
