import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  host: { 'collision-id': 'AddProductComponent' },
})
export class AddComponent {}
