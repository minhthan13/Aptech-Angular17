import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Category } from 'src/app/entities/category.entity';
import { CategoryApiService } from 'src/app/Services/category-api.service';

@Component({
  selector: 'category-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './Details.component.html',
})
export class CategoryDetailsComponent implements OnInit {
  constructor(
    private categoryService: CategoryApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  category: Category;
  keyword: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((a) => {
      let id = a.get('id');
      this.categoryService.searchById(id).then(
        (res) => {
          this.category = res as Category;
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
