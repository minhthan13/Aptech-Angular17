import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../entities/category.entity';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategorySidebarComponent implements OnInit {
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
