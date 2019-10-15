import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UploaderComponent } from './uploader/uploader.component';


const routes: Routes = [
  {path:'users', component: UserListComponent},
  {path:'products', component: ProductListComponent},
  {path:'upload', component: UploaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
