import { Component } from '@angular/core';

@Component({
  selector: 'carousel-slide',
  standalone: true,

  imports: [],
  host: { 'collision-id': 'CarouselComponent' },
  templateUrl: './carousel-slide.component.html',
})
export class CarouselSlideComponent {}
