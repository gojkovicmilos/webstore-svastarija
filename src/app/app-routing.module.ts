import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { UserListComponent } from "./user-list/user-list.component";
<<<<<<< HEAD
import { UploaderComponent } from './uploader/uploader.component';
=======
import { ProductComponent } from './product/product.component';
>>>>>>> master


const routes: Routes = [
  {path:'users', component: UserListComponent},
  {path:'products', component: ProductListComponent},
<<<<<<< HEAD
  {path:'upload', component: UploaderComponent}
=======
  {path:'products/details', component: ProductComponent}
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
