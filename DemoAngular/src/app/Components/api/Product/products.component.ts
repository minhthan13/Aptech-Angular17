import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductApi } from 'src/app/entities/product_api.entity';
import { enviroment } from 'src/app/Enviroments/Enviroment';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-api-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
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

  Delete(id: any) {
    this.productApiService.delete(id).then(
      (res) => {
        console.log(res);
        this.ngOnInit();
      },
      (err) => {}
    );
  }
}
