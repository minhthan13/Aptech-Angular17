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

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
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
];
