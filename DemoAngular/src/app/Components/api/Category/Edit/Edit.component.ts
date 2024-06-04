import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Category } from 'src/app/entities/category.entity';
import { CategoryApiService } from 'src/app/Services/category-api.service';

@Component({
  selector: 'category-list',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './Edit.component.html',
})
export class EditCategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryApiService,
    private formBuilder: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  editForm: FormGroup;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((a) => {
      let id = a.get('id');
      this.categoryService.searchById(id).then(
        (res) => {
          let category: Category = res as Category;
          this.editForm = this.formBuilder.group({
            id: category.id,
            name: category.name,
          });
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
  save() {
    let category: Category = this.editForm.value as Category;
    console.log(category);
    this.categoryService.UpdateCategory(category).then(
      (res) => {
        let result: boolean = res['result'];
        console.log(result);
        if (result) {
          this.route.navigate(['categories']);
        } else {
          alert('edit failed');
        }
      },
      (err) => {}
    );
  }
}
