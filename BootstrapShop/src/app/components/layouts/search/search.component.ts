import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-index',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  host: { 'collision-id': 'SearchComponent' },
})
export class SearchComponent implements OnInit {
  ngOnInit(): void {}
}
