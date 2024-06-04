import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/aboutUs/aboutUs.component';
import { NewsComponent } from './Components/news/news.component';
import { Demo6Component } from './Components/demo6/demo6.component';
import { ProductDetailComponent } from './Components/Products/product-detail/product-detail.component';
import { LoginComponent } from './Components/login/login.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ProfileComponent } from './Components/users/profile/profile.component';
import { ContactComponent } from './Components/contact/contact.component';
import { Contact1Component } from './Components/contact/contact1/contact1.component';
import { Contact2Component } from './Components/contact/contact2/contact2.component';
import { CategoryListComponent } from './Components/api/Category/List/CategoryList.component';
import { CategoryDetailsComponent } from './Components/api/Category/Details/Details.component';
import { ProductsComponent } from './Components/api/Product/products.component';
import { ProductDetailsComponent as proDetail } from './Components/api/Product/details/details.component';
import { AddCategoryComponent } from './Components/api/Category/Add/Add.component';
import { EditCategoryComponent } from './Components/api/Category/Edit/Edit.component';
import { LoginAPIComponent } from './Components/account/login/login.component';
import { RegisterAPIComponent } from './Components/account/register/register.component';
import { WelcomeAPIComponent } from './Components/account/welcome/welcome.component';
import { ProfileAPIComponent } from './Components/account/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'category-details', component: CategoryDetailsComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'edit-category', component: EditCategoryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-api-detail', component: proDetail },

  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'products', component: Demo6Component },
  { path: 'product-detail', component: ProductDetailComponent },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      { path: '', component: Contact1Component },
      { path: 'contact1', component: Contact1Component },
      { path: 'contact2', component: Contact2Component },
    ],
  },

  //===========
  { path: 'login-api', component: LoginAPIComponent },
  { path: 'register-api', component: RegisterAPIComponent },
  { path: 'welcome-api', component: WelcomeAPIComponent },
  { path: 'profile-api', component: ProfileAPIComponent },
];
