import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../entities/product.entity';
import { CurrencyPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink, CurrencyPipe],
  templateUrl: './home.component.html',
  host: { 'collision-id': 'HomeComponent' },
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductService) {}
  productsLatest: Product[];
  ngOnInit(): void {
    this.productService.getLatestProduct(6).then(
      (res) => {
        if (res) {
          this.productsLatest = res as Product[];
        }
      },
      (err) => {}
    );
  }
}
