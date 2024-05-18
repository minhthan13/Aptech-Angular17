import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './product-detail.component.html',
  host: { 'collision-id': 'ProductDetailComponent' },
})
export class ProductDetailComponent implements OnInit {
  ngOnInit(): void {}
}
