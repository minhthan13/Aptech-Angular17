import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entities';

@Injectable({
  providedIn: 'root',
})
export class ProductSerivce {
  find(): Product {
    return {
      id: 1,
      name: 'proName',
      photo: 'Java.jpg',
      price: 9,
      quantity: 5,
    };
  }
  findAll(): Product[] {
    return [
      {
        id: 1,
        name: 'tivi',
        photo: 'Docker.jpeg',
        price: 19,
        quantity: 10,
      },
      {
        id: 2,
        name: 'Flutter',
        photo: 'Flutter.png',
        price: 170,
        quantity: 21,
      },
      {
        id: 3,
        name: 'Potsman',
        photo: 'postman.jpg',
        price: 7,
        quantity: 17,
      },
    ];
  }

  searchByPrice(min: number, max: number): Product[] {
    return this.findAll().filter((p) => p.price >= min && p.price <= max);
  }
  searchByKeyword(keyword: string): Product[] {
    return this.findAll().filter((p) =>
      p.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }
  searchById(id: number): Product {
    return this.findAll().find((p) => p.id === id);
  }
  sortASC() {
    return this.findAll().sort((p1, p2) => p1.price - p2.price);
  }
  sortDESC() {
    return this.findAll().sort((p1, p2) => p2.price - p1.price);
  }
  sortWithPrices(min: number, max: number): Product[] {
    return this.findAll()
      .filter((p) => p.price >= min && p.price <= max)
      .sort((p1, p2) => p2.price - p1.price);
  }

  limit(n: number) {
    this.findAll()
      .sort((p1, p2) => p2.price - p1.price)
      .slice(0, n);
  }

  limit2(start: number, n: number) {
    return this.findAll()
      .sort((p1, p2) => p2.price - p1.price)
      .slice(start, n + 1);
  }

  exists(id: number): boolean {
    return this.findAll().some((p) => p.id === id);
  }
}
