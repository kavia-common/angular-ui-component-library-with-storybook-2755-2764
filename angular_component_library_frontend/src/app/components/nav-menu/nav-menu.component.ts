import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 PUBLIC_INTERFACE
 NavMenuComponent renders the header navigation menu items, optionally with a dropdown indicator asset.
 */
@Component({
  selector: 'lib-nav-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  /** PUBLIC_INTERFACE: Menu items to render */
  @Input() items: Array<{label: string, hasDropdown?: boolean}> = [
    { label: 'Home' },
    { label: 'Plant Type’s', hasDropdown: true },
    { label: 'More' },
    { label: 'Contact' },
  ];
  dropdownIcon = 'assets/figmaimages/figma_image_22_8.png';
}
