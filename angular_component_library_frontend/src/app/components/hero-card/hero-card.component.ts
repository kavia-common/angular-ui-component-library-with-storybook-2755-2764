import { Component, Input } from '@angular/core';

/**
 PUBLIC_INTERFACE
 HeroCardComponent replicates the hero right-side product card with rounded surface, image, title and CTA.
 */
@Component({
  selector: 'lib-hero-card',
  standalone: true,
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {
  /** PUBLIC_INTERFACE: main image path */
  @Input() image = 'assets/figmaimages/figma_image_17_167.png';
  /** PUBLIC_INTERFACE: eyebrow or small title */
  @Input() eyebrow = 'Trendy House Plant';
  /** PUBLIC_INTERFACE: title */
  @Input() title = 'Calathea plant';
  /** PUBLIC_INTERFACE: cta label */
  @Input() cta = 'Buy Now';
}
