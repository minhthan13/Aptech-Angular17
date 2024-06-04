import { Component, DoCheck, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Category } from 'src/app/entities/category.entity';
import { CategoryApiService } from 'src/app/Services/category-api.service';

@Component({
  selector: 'category-list',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './CategoryList.component.html',
})
export class CategoryListComponent implements OnInit {
  constructor(
    private categoryService: CategoryApiService,
    private router: Router
  ) {}

  categories: Category[];
  keyword: string;

  ngOnInit(): void {
    this.categoryService.findAll().then(
      (res: any) => {
        this.categories = res;
      },
      (err) => {
        console.log(err);
      }
    );
    this.keyword = '';
  }

  search() {
    if (this.keyword == null || this.keyword.length == 0) {
      this.categoryService.findAll().then(
        (res: any) => {
          this.categories = res as Category[];
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
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

  Delete(id: number) {
    let result = confirm('Are you sure?');
    if (result) {
      this.categoryService.DeleteCategory(id).then(
        (res) => {
          let result: boolean = res['result'];
          if (result) {
            // this.router.navigate(['categories']);

            const currentUrl = this.router.url;
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => {
                this.router.navigate([currentUrl]);
              });
          }
          // alert(result ? 'success' : 'failed');
        },
        (err) => {
          console.error('failed');
        }
      );
    }
  }
}
