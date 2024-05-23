import { Component, OnInit } from '@angular/core';
import { ProductApi } from 'src/app/entities/product_api.entity';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-api-product',
  standalone: true,
  imports: [],
  templateUrl: './api-product.component.html',
})
export class ApiProductComponent implements OnInit {
  products: ProductApi[];
  constructor(private productApiService: ProductApiService) {}
  ngOnInit(): void {
    this.productApiService.findAll().then(
      (res) => {
        this.products = res as ProductApi[];
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
