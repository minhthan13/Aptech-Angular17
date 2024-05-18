import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/product.entities';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css', './demo11.component.css'],
})
export class Demo1Component implements OnInit {
  ngOnInit(): void {
    this.id = 1;
    this.username = 'minhthan13';
    this.status = true;
    this.phone = '+84902518533';
    this.price = 3.2;
    this.quantity = 40;
    this.photo = 'Docker.jpeg';
    this.width = 100;
    this.height = 100;
    this.product = {
      id: 1,
      name: 'product 1',
      photo: 'Docker.jpeg',
      price: 3.2,
      quantity: 10,
    };
    this.score = 6.4;

    this.names = [
      'name 1',
      'name 2',
      'name 3',
      'name 4',
      'name 5',
      'name 6',
      'name 7',
    ];
    this.products = [
      {
        id: 1,
        name: 'product 1',
        photo: 'Docker.jpeg',
        price: 3.2,
        quantity: 10,
      },
      {
        id: 2,
        name: 'product 2',
        photo: 'Flutter.png',
        price: 17,
        quantity: 21,
      },
      {
        id: 3,
        name: 'product 3',
        photo: 'postman.jpg',
        price: 21.5,
        quantity: 17,
      },
    ];
  }

  id: number;
  username: string;
  status: boolean;
  phone: any;
  price: number;
  quantity: number;
  photo: string;
  width: number;
  height: number;

  product: Product;
  score: number;

  names: string[];
  products: Product[];
}
