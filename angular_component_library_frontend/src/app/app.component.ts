import { Component } from '@angular/core';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HeroCopyBlockComponent } from './components/hero-copy-block/hero-copy-block.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent, HeroCopyBlockComponent, HeroCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello, angular';
}
