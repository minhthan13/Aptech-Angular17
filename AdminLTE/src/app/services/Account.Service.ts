import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enviroment } from '../Enviroments/Enviroment';

import { lastValueFrom } from 'rxjs';
import { AccountDTO } from '../entities/AccountDTO.entities';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}
  baseUrl = enviroment.baseApiUrl + 'account';
  async create(account: AccountDTO) {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl + '/createAccount', account)
    );
  }
  async login(account: AccountDTO) {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl + '/LoginAdmin', account)
    );
  }
  async findAccountUsername(username: string): Promise<AccountDTO> {
    return lastValueFrom(
      this.httpClient.get<AccountDTO>(
        this.baseUrl + '/findByUsername/' + username
      )
    );
  }

  async UpdateAcount(account: AccountDTO) {
    return lastValueFrom(
      this.httpClient.put(this.baseUrl + '/update-angular', account)
    );
  }
}
