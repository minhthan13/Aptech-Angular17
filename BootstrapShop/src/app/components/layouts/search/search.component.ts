import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../entities/category.entity';

@Component({
  selector: 'search-index',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  host: { 'collision-id': 'SearchComponent' },
})
export class SearchComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.categoryService.findAll().then(
      (res) => {
        if (res) {
          this.categories = res as Category[];
        }
      },
      (err) => {}
    );
  }
}
