import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/Services/Account.Service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  constructor(
    private accountService: AccountService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  Username: string;
  Password: string;
  Login() {
    let result = this.accountService.login(this.Username, this.Password);
    if (result) {
      this.route.navigate(['welcome', { username: this.Username }]);
    } else {
      console.log('failed');
    }
  }
  Clear(event: any) {
    this.Username = '';
    this.Password = '';
  }
}
