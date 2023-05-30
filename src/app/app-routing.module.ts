import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      { path: 'product/:id', component: ProductDetailComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/add',
        component: ProductAddComponent,
      },
      {
        path: 'products/edit',
        component: ProductEditComponent,
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
