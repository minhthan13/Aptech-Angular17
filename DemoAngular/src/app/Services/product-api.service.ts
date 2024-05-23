import { Injectable } from '@angular/core';
import { enviroment } from '../Enviroments/Enviroment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private httpClient: HttpClient) {}
  baseUrl = enviroment.baseApiUrl + 'product';
  async findAll() {
    return lastValueFrom(this.httpClient.get(this.baseUrl + '/getallproduct'));
  }
}
