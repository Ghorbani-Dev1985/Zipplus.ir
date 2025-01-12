import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
   {
    path: '',
    component: HomeComponent
  },
  {
    path: 'category/:id' ,
    component: CategoryComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];
