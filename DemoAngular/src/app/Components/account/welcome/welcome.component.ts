import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  host: { 'collision-id': 'WelcomeAPIComponent' },
})
export class WelcomeAPIComponent implements OnInit {
  route = inject(Router);
  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }
  username: string = '';

  Logout() {
    localStorage.removeItem('username');
    this.route.navigate(['login']);
  }
  Profile() {
    this.route.navigate(['profile-api']);
  }
}
