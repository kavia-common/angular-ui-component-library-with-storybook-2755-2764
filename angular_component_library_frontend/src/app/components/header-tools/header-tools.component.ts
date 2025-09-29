import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 PUBLIC_INTERFACE
 HeaderToolsComponent displays header tool icons like search and burger/menu indicator.
 */
@Component({
  selector: 'lib-header-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-tools.component.html',
  styleUrls: ['./header-tools.component.css']
})
export class HeaderToolsComponent {
  /** PUBLIC_INTERFACE: show search icon */
  @Input() showSearch = true;
  /** PUBLIC_INTERFACE: show burger menu indicator */
  @Input() showBurger = true;

  searchIcon = 'assets/figmaimages/figma_image_22_13.png';
}
