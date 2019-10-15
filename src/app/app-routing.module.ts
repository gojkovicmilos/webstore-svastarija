import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { UserListComponent } from "./user-list/user-list.component";
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:'users', component: UserListComponent},
  {path:'products', component: ProductListComponent},
  {path:'products/details', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
