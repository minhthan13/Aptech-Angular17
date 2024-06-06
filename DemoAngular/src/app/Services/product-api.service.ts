import { Injectable } from '@angular/core';
import { enviroment } from '../Enviroments/Enviroment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ProductApi } from '../entities/product_api.entity';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private httpClient: HttpClient) {}
  baseUrl = enviroment.baseApiUrl + 'product';
  async findAll() {
    return lastValueFrom(this.httpClient.get(this.baseUrl + '/getallproduct'));
  }
  async findId(id: string) {
    return lastValueFrom(this.httpClient.get(this.baseUrl + '/find/' + id));
  }

  async upload(formData: FormData) {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl + '/upload2', formData)
    );
  }

  async created(formData: FormData) {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl + '/Created2', formData)
    );
  }

  async delete(id: string) {
    return lastValueFrom(
      this.httpClient.delete(this.baseUrl + '/delete/' + id)
    );
  }

  async editProduct(formdata) {
    return lastValueFrom(
      this.httpClient.put(this.baseUrl + '/Update2', formdata)
    );
  }
}
