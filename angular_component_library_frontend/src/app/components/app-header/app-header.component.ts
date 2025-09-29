import { Component, Input } from '@angular/core';
import { BrandLogoComponent } from '../brand-logo/brand-logo.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { HeaderToolsComponent } from '../header-tools/header-tools.component';

/**
 * AppHeaderComponent renders the top navigation header using brand, navigation menu and header tools.
 * PUBLIC_INTERFACE
 */
@Component({
  selector: 'lib-app-header',
  standalone: true,
  imports: [BrandLogoComponent, NavMenuComponent, HeaderToolsComponent],
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  /** PUBLIC_INTERFACE: Toggle translucent style on dark hero background */
  @Input() translucent = true;
}
