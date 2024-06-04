import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApi } from 'src/app/entities/product_api.entity';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  product: ProductApi;
  constructor(
    private productApiService: ProductApiService,
    private activaRouted: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activaRouted.paramMap.subscribe((a) => {
      let id = a.get('id');
      this.productApiService.findId(id).then(
        (res) => {
          console.log(res);
          this.product = res as ProductApi;
        },
        (err) => {
          console.error('error');
        }
      );
    });
  }
}
