import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { enviroment } from '../Enviroments/Enviroment';
import { Category } from '../entities/category.entity';

@Injectable({
  providedIn: 'root',
})
export class CategoryApiService {
  constructor(private httpClient: HttpClient) {}
  baseUrl = enviroment.baseApiUrl + 'category';
  async findAll() {
    return lastValueFrom(this.httpClient.get(this.baseUrl + '/getCategory'));
  }

  async searchByKeyWord(keyword: string) {
    return lastValueFrom(
      this.httpClient.get(this.baseUrl + '/findKeyword/' + keyword)
    );
  }

  async searchById(id: string) {
    return lastValueFrom(this.httpClient.get(this.baseUrl + '/find/' + id));
  }

  async AddCategory(cate: Category) {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl + '/createdCategory', cate)
    );
  }

  async DeleteCategory(id: number) {
    return lastValueFrom(
      this.httpClient.delete(this.baseUrl + '/deleteCategory/' + id)
    );
  }

  async UpdateCategory(cate: Category) {
    return lastValueFrom(
      this.httpClient.put(this.baseUrl + '/editCategory', cate)
    );
  }
}
