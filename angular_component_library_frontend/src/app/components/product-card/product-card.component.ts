import { Component, Input } from '@angular/core';

/**
 PUBLIC_INTERFACE
 ProductCardComponent renders a single product card aligned to Figma design with image, title, description and price/action.
 */
@Component({
  selector: 'lib-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  /** PUBLIC_INTERFACE: Product image path */
  @Input() image = 'assets/figmaimages/figma_image_22_96.png';
  /** PUBLIC_INTERFACE: Product title */
  @Input() title = 'Calathea plant';
  /** PUBLIC_INTERFACE: Short description */
  @Input() description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
  /** PUBLIC_INTERFACE: Price label */
  @Input() price = 'Rs. 309/-';
  /** PUBLIC_INTERFACE: whether to show an add button icon image */
  @Input() addIcon = 'assets/figmaimages/figma_image_22_100.png';
  /** PUBLIC_INTERFACE: inner plus symbol image */
  @Input() addSymbol = 'assets/figmaimages/figma_image_22_101.png';
}
