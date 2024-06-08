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
  async getProductCategory(n: string) {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/getProductCategoryId/' + n)
    );
  }

  async getAllProduct() {
    return lastValueFrom(this.httpClient.get(this.baseUrl + '/GetAllProduct/'));
  }

  async getProductDetail(id: string) {
    return lastValueFrom(this.httpClient.get(this.baseUrl + '/Find/' + id));
  }

  async getProductRelated(id: string, n: number) {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/getProductRelated/', {
        params: { id, n },
      })
    );
  }
}
