import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent implements OnInit {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((p) => {
      this.username = p.get('username');
    });
  }
  username: string = '';

  Logout() {
    this.route.navigate(['login']);
  }
  Profile() {
    this.route.navigate(['profile', { username: this.username }]);
  }
}
