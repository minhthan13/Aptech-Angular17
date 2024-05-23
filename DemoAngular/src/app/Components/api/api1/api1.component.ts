import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from 'src/app/entities/category.entity';
import { CategoryApiService } from 'src/app/Services/category-api.service';

@Component({
  selector: 'app-api1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './api1.component.html',
  styleUrl: './api1.component.css',
})
export class Api1Component implements OnInit {
  constructor(private categoryService: CategoryApiService) {}

  categories: Category[];
  keyword: string;

  ngOnInit(): void {
    this.categoryService.findAll().then(
      (res: any) => {
        this.categories = res.category;
        console.log('>>> check category :', this.categories);
      },
      (err) => {
        console.log(err);
      }
    );
    this.keyword = '';
  }

  search() {
    this.categoryService.searchByKeyWord(this.keyword).then(
      (res) => {
        this.categories = res as Category[];
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
