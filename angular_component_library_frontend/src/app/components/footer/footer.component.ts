import { Component, Input } from '@angular/core';
import { BrandLogoComponent } from '../brand-logo/brand-logo.component';

/**
 PUBLIC_INTERFACE
 FooterComponent renders the site footer with brand, quick links, subscribe, and social.
 */
@Component({
  selector: 'lib-footer',
  standalone: true,
  imports: [BrandLogoComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  /** PUBLIC_INTERFACE: Background color */
  @Input() background = '#222c1d';

  links = ['Home', 'Plant Type’s', 'Contact', 'Privacy'];
  subscribeCta = 'assets/figmaimages/figma_image_22_227.png';
}
