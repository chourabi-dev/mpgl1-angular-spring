import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';


const routes: Routes = [
  { path:'' , component:ProductsListComponent },
  { path:'add-product' , component:AddProductComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
