import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './special-offer.component.html',
  host: { 'collision-id': 'SpecialOffer' },
})
export class SpecialOfferComponent implements OnInit {
  ngOnInit(): void {}
}
