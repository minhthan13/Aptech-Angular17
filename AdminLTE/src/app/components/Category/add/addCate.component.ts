import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { CategoryDTO } from '../../../entities/CategoryDTO.entity';

@Component({
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './addCate.component.html',
  styleUrl: './add.component.css',
  host: { 'collision-id': 'AddCategoryComponent' },
})
export class AddCategoryComponent implements OnInit {
  addCategory() {
    let cate: CategoryDTO = new CategoryDTO();
    console.log(this.cateName);
    cate.name = this.cateName;
    this.cateService.AddCategory(cate).then((res) => {
      let result: boolean = res['result'];
      if (result) {
        console.log('add category success');
        this.router.navigate(['admin/categories']);
      }
    });
  }
  constructor(private cateService: CategoryService, private router: Router) {}
  ngOnInit(): void {}
  cateName: string;
}
