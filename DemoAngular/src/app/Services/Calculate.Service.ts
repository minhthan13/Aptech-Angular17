import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entities';

@Injectable({
  providedIn: 'root',
})
export class CalculateSerivce {
  Add(a: number, b: number): number {
    return a + b;
  }
  Mul(a: number, b: number): number {
    return a * b;
  }
}
