import { Component, Input } from '@angular/core';

/**
 PUBLIC_INTERFACE
 TestimonialCardComponent displays a customer review with avatar, name, rating and message.
 */
@Component({
  selector: 'lib-testimonial-card',
  standalone: true,
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css']
})
export class TestimonialCardComponent {
  /** PUBLIC_INTERFACE: Avatar image from assets/figmaimages */
  @Input() avatar = 'assets/figmaimages/figma_image_22_152.png';
  /** PUBLIC_INTERFACE: Reviewer name */
  @Input() name = 'Maln Josi';
  /** PUBLIC_INTERFACE: Rating 0..5, supports half by .5 */
  @Input() rating: number = 4.5;
  /** PUBLIC_INTERFACE: Message text */
  @Input() message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}
