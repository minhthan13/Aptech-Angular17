import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AccountService } from '../../../services/Account.Service';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  host: { 'collision-id': 'LoginComponent' },
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {}
  formLogin: FormGroup;
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: '',
      password: '',
    });
  }
  login() {
    let value = this.formLogin.value;

    this.accountService.login(value).then((res) => {
      let result: boolean = res['result'];
      if (result) {
        localStorage.setItem('user-admin', value.username);
        this.router.navigate(['admin']);
      } else {
        alert('login failed');
      }
    });
  }
}
