import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  host: { 'collision-id': 'ListProductComponent' },
})
export class ListProductComponent {}
