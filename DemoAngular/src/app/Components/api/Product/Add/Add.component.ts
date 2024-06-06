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
import { ProductApi } from 'src/app/entities/product_api.entity';
import { CategoryApiService } from 'src/app/Services/category-api.service';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './Add.component.html',
})
export class AddProductComponent implements OnInit {
  constructor(
    private productApiService: ProductApiService,
    private categoryAPIService: CategoryApiService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}
  addForm: FormGroup;
  categories: Category[];
  file: File;
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      description: ['', [Validators.required]],
      created: ['', [Validators.required]],
      status: true,
      categoryId: '',
    });

    this.categoryAPIService.findAll().then(
      (res) => {
        this.categories = res as Category[];
      },
      (err) => {}
    );
  }
  save() {
    let Product: ProductApi = this.addForm.value as ProductApi;
    let productJson = JSON.stringify(Product);
    console.log(productJson);
    let formData = new FormData();
    if (this.file != null) {
      formData.append('file', this.file);
    }
    formData.append('sJson', productJson);
    this.productApiService.created(formData).then(
      (res) => {
        console.log('res info');
        console.log(res);
        let result: boolean = res['result'];
        if (result) {
          this.route.navigate(['/products']);
        }
      },
      (err) => {}
    );
  }
  fileselected(event: any) {
    this.file = event.target.files[0];
  }
}
