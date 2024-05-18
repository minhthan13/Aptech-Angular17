import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/app/entities/product.entities';
import { DemoSerivce } from 'src/app/Services/Demo.Service';
import { ProductSerivce } from 'src/app/Services/Product.Service';
import { RectangleService } from 'src/app/Services/Rectangle.Service';

@Component({
  selector: 'app-demo4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.css',
})
export class Demo4Component implements OnInit {
  result1: string;
  result2: string;
  result3: boolean;
  prod: Product;
  listProd: Product[];
  area: number;
  perimeter: number;
  constructor(
    private demoService: DemoSerivce,
    private productService: ProductSerivce,
    private rectangleService: RectangleService
  ) {
    console.log('constructor');
  }
  ngOnInit(): void {
    this.result1 = this.demoService.hello();
    console.log('on init');
    this.result2 = this.demoService.hi(' abc');
    this.prod = this.productService.searchById(4);
    // this.listProd = this.productService.findAll();
    // this.listProd = this.productService.searchByPrice(5, 10);
    this.listProd = this.productService.searchByKeyword('ti');
    this.listProd = this.productService.sortASC();
    this.listProd = this.productService.sortDESC();
    this.listProd = this.productService.sortWithPrices(5, 100);
    this.listProd = this.productService.limit2(1, 2);
    this.result3 = this.productService.exists(1);
    this.area = this.rectangleService.Area(2, 4);
    this.perimeter = this.rectangleService.Perimeter(7, 8);
  }
}
