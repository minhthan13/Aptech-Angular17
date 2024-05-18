import { Injectable } from '@angular/core';
import { CalculateSerivce } from './Calculate.Service';
@Injectable({
  providedIn: 'root',
})
export class RectangleService {
  constructor(private calculateService: CalculateSerivce) {}
  Area(a: number, b: number): number {
    return this.calculateService.Mul(a, b);
  }

  Perimeter(a: number, b: number): number {
    return this.calculateService.Mul(this.calculateService.Add(a, b), 2);
  }
}
