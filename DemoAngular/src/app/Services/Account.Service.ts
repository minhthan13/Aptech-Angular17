import { Injectable } from '@angular/core';
import { Account } from '../entities/account.entities';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {
    this.accounts = [
      { username: 'acc1', password: '123', fullName: 'name 1' },
      { username: 'acc2', password: '123', fullName: 'name 2' },
      { username: 'acc3', password: '123', fullName: 'name 3' },
      { username: 'acc4', password: '123', fullName: 'name 4' },
    ];
  }
  accounts: Account[];
  login(username: string, password: string): boolean {
    return (
      this.accounts.filter(
        (a) => a.username === username && a.password === password
      ).length > 0
    );
  }

  findByUsername(username: string): Account {
    return this.accounts.find((p) => p.username == username);
  }
}
