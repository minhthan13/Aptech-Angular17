import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './cart.component.html',
  host: { 'collision-id': 'CartComponent' },
})
export class CartComponent implements OnInit {
  ngOnInit(): void {}
}
