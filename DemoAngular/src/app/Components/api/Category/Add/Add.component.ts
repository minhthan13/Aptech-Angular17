import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Category } from 'src/app/entities/category.entity';
import { CategoryApiService } from 'src/app/Services/category-api.service';

@Component({
  selector: 'category-list',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './Add.component.html',
})
export class AddCategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryApiService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}
  addForm: FormGroup;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }
  save() {
    let category: Category = this.addForm.value as Category;
    console.log(category);
    this.categoryService.AddCategory(category).then(
      (res) => {
        let result: boolean = res['result'];
        console.log(result);
        if (result) {
          this.route.navigate(['categories']);
        } else {
          alert('add failed');
        }
      },
      (err) => {}
    );
  }
}
