import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { enviroment } from '../../Enviroments/Enviroment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  baseUrl = enviroment.baseApiUrl + 'product';
  async getLatestProduct(n: number) {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/getProductLatests/' + n)
    );
  }
}
