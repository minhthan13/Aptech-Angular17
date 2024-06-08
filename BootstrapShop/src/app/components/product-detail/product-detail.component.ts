import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  host: { 'collision-id': 'ProductDetailComponent' },
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.loadProduct();
  }
  product: Product;
  productRelated: Product[];
  ngOnInit(): void {}
  loadProduct() {
    this.activatedRoute.paramMap.subscribe(async (r) => {
      let id = r.get('id');

      await this.productService.getProductDetail(id).then(
        (res) => {
          this.product = res as Product;
          console.log('>>> check product detail', this.product);
        },
        (err) => {}
      );
      await this.productService.getProductRelated(id, 2).then(
        (res2) => {
          this.productRelated = res2 as Product[];
          console.log(this.productRelated);
        },
        (err) => {}
      );
    });
  }
}
