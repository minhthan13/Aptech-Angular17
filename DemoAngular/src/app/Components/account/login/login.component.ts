import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AccountDTO } from 'src/app/entities/accountDTO.entities';
import { AccountAPIService } from 'src/app/Services/Account-API.Service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  host: { 'collision-id': 'LoginAPIComponent' },
})
export class LoginAPIComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountApiService: AccountAPIService
  ) {}
  msg: string;
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  Login() {
    let account: AccountDTO = this.formLogin.value as AccountDTO;
    this.accountApiService.login(account).then(
      (res) => {
        let result: boolean = res['result'];
        if (result) {
          localStorage.setItem('username', account.username);
          this.router.navigate(['welcome-api']);
        } else {
          alert('login failed');
        }
      },
      (err) => {
        this.msg = 'Login failed';
      }
    );
  }
  Clear(event: any) {
    this.formLogin.setValue({ username: '', password: '' });
    this.msg = '';
  }
}
