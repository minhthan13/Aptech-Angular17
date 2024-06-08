import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../entities/category.entity';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'search-index',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  host: { 'collision-id': 'SearchComponent' },
})
export class SearchComponent implements OnInit {
  categories: Category[];
  CateModel = new FormControl('');
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}
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

  GetProductCategory() {
    let id = this.CateModel.value;
    this.router.navigate(['/categories', { id }]);
  }
}
