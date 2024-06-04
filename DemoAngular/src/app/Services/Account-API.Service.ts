import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enviroment } from '../Enviroments/Enviroment';
import { AccountDTO } from '../entities/accountDTO.entities';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AccountAPIService {
  httpClient = inject(HttpClient);
  baseUrl = enviroment.baseApiUrl + 'account';
  async create(account: AccountDTO) {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl + '/createAccount', account)
    );
  }
  async login(account: AccountDTO) {
    return lastValueFrom(
      this.httpClient.post(this.baseUrl + '/Login', account)
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
