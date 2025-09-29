import { Component, Input } from '@angular/core';

/**
 PUBLIC_INTERFACE
 SectionHeadingComponent shows a large section title with optional trailing icon image.
 */
@Component({
  selector: 'lib-section-heading',
  standalone: true,
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.css']
})
export class SectionHeadingComponent {
  /** PUBLIC_INTERFACE: Title text */
  @Input() title = 'Our Trendy plants';
  /** PUBLIC_INTERFACE: Optional figure image path */
  @Input() icon?: string = 'assets/figmaimages/figma_image_22_62.png';
}
