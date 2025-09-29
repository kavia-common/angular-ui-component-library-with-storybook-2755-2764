import { Component, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

/**
 PUBLIC_INTERFACE
 ProductGridComponent displays a responsive grid of ProductCard items.
 */
@Component({
  selector: 'lib-product-grid',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent {
  /** PUBLIC_INTERFACE: Items to render */
  @Input() items: Array<{
    image: string; title: string; description: string; price: string;
    addIcon?: string; addSymbol?: string;
  }> = [];
}
