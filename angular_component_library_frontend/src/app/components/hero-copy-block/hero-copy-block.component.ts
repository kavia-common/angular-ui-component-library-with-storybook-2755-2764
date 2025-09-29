import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 PUBLIC_INTERFACE
 HeroCopyBlockComponent renders the left hero copy with headline, description, and actions.
 */
@Component({
  selector: 'lib-hero-copy-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-copy-block.component.html',
  styleUrls: ['./hero-copy-block.component.css']
})
export class HeroCopyBlockComponent {
  /** PUBLIC_INTERFACE: Headline text */
  @Input() headline = 'Breath Natural';
  /** PUBLIC_INTERFACE: Description text */
  @Input() description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  /** PUBLIC_INTERFACE: Primary CTA label */
  @Input() primaryCta = 'Explore';
  /** PUBLIC_INTERFACE: Show demo play */
  @Input() showDemo = true;
  playRing = 'assets/figmaimages/figma_image_22_42.png';
  playTriangle = 'assets/figmaimages/figma_image_22_43.png';
}
