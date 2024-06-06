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
import { ProductApi } from 'src/app/entities/product_api.entity';
import { CategoryApiService } from 'src/app/Services/category-api.service';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './Edit.component.html',
})
export class EditProductComponent implements OnInit {
  constructor(
    private productApiservice: ProductApiService,
    private categoryService: CategoryApiService,
    private formBuilder: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  editForm: FormGroup;
  photo: string;
  categories: Category[];

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((a) => {
      let id = a.get('id');
      this.productApiservice.findId(id).then(
        (res) => {
          let product: ProductApi = res as ProductApi;
          this.photo = product.photo;
          this.editForm = this.formBuilder.group({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            description: product.description,
            created: product.created,
            status: product.status,
            categoryId: product.categoryId,
          });
        },
        (err) => {}
      );
    });

    this.categoryService.findAll().then(
      (res) => {
        this.categories = res as Category[];
      },
      (err) => {}
    );
  }
  save() {
    let Product: ProductApi = this.editForm.value as ProductApi;
    let productJson = JSON.stringify(Product);
    console.log(productJson);
    let formData = new FormData();
    if (this.photo != null) {
      formData.append('file', this.photo);
    }
    formData.append('sJson', productJson);
    this.productApiservice.editProduct(formData).then(
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
    this.photo = event.target.files[0];
  }
}
