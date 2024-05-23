import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { enviroment } from '../Enviroments/Enviroment';

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
}
