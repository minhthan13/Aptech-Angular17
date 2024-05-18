import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from 'src/app/entities/product.entities';
import { ProductSerivce } from 'src/app/Services/Product.Service';

@Component({
  selector: 'app-demo6',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './demo6.component.html',
  styleUrl: './demo6.component.css',
  host: { 'collision-id': 'ProductsComponent' },
})
export class Demo6Component implements OnInit {
  products: Product[];
  keyword: string;
  min: string;
  max: string;
  constructor(private productService: ProductSerivce) {}
  ngOnInit(): void {
    this.products = this.productService.findAll();
    this.keyword = '';
  }

  SearcKeyword() {
    this.products = this.productService.searchByKeyword(this.keyword);
  }

  SearchByPrice() {
    this.products = this.productService.searchByPrice(
      parseInt(this.min),
      parseInt(this.max)
    );
  }

  FilterName(event: any) {
    console.log(event.target.value);
    this.products = this.productService.searchByKeyword(event.target.value);
  }
}
