import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { CategoryDTO } from '../../../entities/CategoryDTO.entity';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  host: { 'collision-id': 'ListCategoryComponent' },
})
export class ListCategoryComponent implements OnInit {
  constructor(private cateService: CategoryService) {}
  ngOnInit(): void {
    this.cateService.findAll().then((res) => {
      this.categories = res as CategoryDTO[];
    });
  }

  deleteCategory(id: number) {
    this.cateService.DeleteCategory(id).then((res) => {
      let result: boolean = res['result'];
      if (result) {
        console.log('delete category success');
        this.ngOnInit();
      } else {
        alert('delete failed');
      }
    });
  }
  categories: CategoryDTO[];
}
