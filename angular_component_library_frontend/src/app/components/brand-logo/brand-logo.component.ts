import { Component, Input } from '@angular/core';

/**
 * BrandLogoComponent shows the brand icon and title.
 * PUBLIC_INTERFACE
 */
@Component({
  selector: 'lib-brand-logo',
  standalone: true,
  templateUrl: './brand-logo.component.html',
  styleUrls: ['./brand-logo.component.css']
})
export class BrandLogoComponent {
  /** PUBLIC_INTERFACE: Brand text caption */
  @Input() label = 'Planto.';
  /** PUBLIC_INTERFACE: Logo image path from assets/figmaimages */
  @Input() src = 'assets/figmaimages/figma_image_17_174.png';
  /** PUBLIC_INTERFACE: Size in px for square logo box */
  @Input() size = 48;
}
