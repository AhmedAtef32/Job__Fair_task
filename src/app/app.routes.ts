import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./featured/pages/home/home.component').then(m => m.HomeComponent),
    title: 'Home'
  },
  {
    path: 'productDetails/:id',
    loadComponent: () => import('./featured/pages/product-detailes/product-detailes.component').then(m => m.ProductDetailesComponent),
    title: 'Product Details'
  }

];
