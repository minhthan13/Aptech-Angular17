import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './categories.component.html',
  host: { 'collision-id': 'CategoriesComponent' },
})
export class CategoriesComponent implements OnInit {
  ngOnInit(): void {}
}
