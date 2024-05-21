import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  host: { 'collision-id': 'LoginComponent' },
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  login() {
    this.router.navigate(['/admin']);
  }
}
