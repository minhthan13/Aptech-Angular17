import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../entities/product.entity';
import { CurrencyPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink, CurrencyPipe],
  templateUrl: './categories.component.html',
  host: { 'collision-id': 'CategoriesComponent' },
})
export class CategoriesComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.loadProducts();
  }
  products: Product[] = [];

  loadProducts() {
    this.activatedRoute.paramMap.subscribe((r) => {
      let id = r.get('id') ?? '-1';
      let a: Promise<any>;
      if (id === '-1') {
        a = this.productService.getAllProduct();
      } else {
        a = this.productService.getProductCategory(id);
      }

      a.then(
        (res) => {
          this.products = res as Product[];
        },
        (err) => {}
      );
    });
  }
}
