import { Component, input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  standalone: true,
  templateUrl: './car-card.component.html',
})
export class CarCardComponent {
  image = input<string>();
  title = input<string>();
  year = input<number>();
  price = input<number>();
}