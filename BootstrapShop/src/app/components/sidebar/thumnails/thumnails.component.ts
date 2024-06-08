import { Component, OnInit } from '@angular/core';
import { Product } from '../../../entities/product.entity';
import { ProductService } from '../../../services/product.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-thumnails-sidebar',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './thumnails.component.html',
  styleUrl: './thumnails.component.css',
})
export class ThumnailsComponent implements OnInit {
  constructor(private productService: ProductService) {}
  productsLatest: Product[];
  ngOnInit(): void {
    this.productService.getLatestProduct(2).then(
      (res) => {
        if (res) {
          this.productsLatest = res as Product[];
        }
      },
      (err) => {}
    );
  }
}
