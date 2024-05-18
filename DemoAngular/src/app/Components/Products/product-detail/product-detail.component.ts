import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/entities/product.entities';
import { ProductSerivce } from 'src/app/Services/Product.Service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((p) => {
      let id = parseInt(p.get('id'));
      this.product = this.productService.searchById(id);
    });
  }
  constructor(
    private productService: ProductSerivce,
    private activatedRoute: ActivatedRoute
  ) {}
}
