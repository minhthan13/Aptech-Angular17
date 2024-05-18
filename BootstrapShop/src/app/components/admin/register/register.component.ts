import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],

  templateUrl: './register.component.html',
  host: { 'collision-id': 'RegisterComponent' },
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {}
}
