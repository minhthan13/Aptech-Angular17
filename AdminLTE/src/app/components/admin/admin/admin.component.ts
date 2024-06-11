import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './admin.component.html',
  host: { 'collision-id': 'AdminComponent' },
})
export class AdminComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.username = localStorage.getItem('user-admin');
    }
  }
  username!: string;
}
