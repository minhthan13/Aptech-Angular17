import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { SpecialOfferComponent } from './components/special-offer/special-offer.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/admin/login/login.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: {
      isHome: 'home',
    },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      isHome: 'home',
    },
  },
  { path: 'special-offer', component: SpecialOfferComponent },
  { path: 'cart', component: CartComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  // path user
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
