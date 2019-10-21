import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UploaderComponent } from './uploader/uploader.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProductCategoryComponent } from './product-category/product-category.component'
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  // {path:'', component: ProductListComponent},
  {path:'users', component: UserListComponent},
  {path:'products', component: ProductListComponent},
  {path:'upload', component: UploaderComponent},
  {path:'products/details', component: ProductComponent},
  {path:'about', component: AboutUsComponent},
  {path:'contact', component: ContactComponent},
  {path:'products/category', component: ProductCategoryComponent},
  {path:'orders', component: OrderComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
