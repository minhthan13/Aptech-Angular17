import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  host: { 'collision-id': 'LoginComponent' },
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
}
