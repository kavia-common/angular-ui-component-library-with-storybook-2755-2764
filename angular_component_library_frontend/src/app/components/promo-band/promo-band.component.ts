import { Component, Input } from '@angular/core';

/**
 PUBLIC_INTERFACE
 PromoBandComponent renders a large white rounded band with an accent image and promotional copy.
 */
@Component({
  selector: 'lib-promo-band',
  standalone: true,
  templateUrl: './promo-band.component.html',
  styleUrls: ['./promo-band.component.css']
})
export class PromoBandComponent {
  /** PUBLIC_INTERFACE: Accent image path (big circle leaf) */
  @Input() accentImage = 'assets/figmaimages/figma_image_22_195.png';
  /** PUBLIC_INTERFACE: Headline */
  @Input() headline = 'We Have Small And Best O2 Plants Collection’s';
  /** PUBLIC_INTERFACE: Copy lines */
  @Input() lines: string[] = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  ];
  /** PUBLIC_INTERFACE: Pager text */
  @Input() pager = '01/04';
  /** PUBLIC_INTERFACE: Dots image paths */
  @Input() dotActive = 'assets/figmaimages/figma_image_22_205.png';
  @Input() dot = 'assets/figmaimages/figma_image_22_206.png';
}
