import { Routes } from '@angular/router';
import { LoginComponent } from './components/admin/login/login.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ListProductComponent } from './components/products/list/list.component';
import { ListCategoryComponent } from './components/Category/list/list.component';
import { AddComponent } from './components/products/add/add.component';
import { AddCategoryComponent } from './components/Category/add/addCate.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ListProductComponent },
      { path: 'add-product', component: AddComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'categories', component: ListCategoryComponent },
    ],
  },
];
