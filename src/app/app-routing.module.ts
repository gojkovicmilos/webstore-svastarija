import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UploaderComponent } from './uploader/uploader.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartFormComponent } from './shopping-cart-form/shopping-cart-form.component';

const routes: Routes = [
  {path:'', component: HomePageComponent, data: {animation: 'HomePage'}},
  {path:'users', component: UserListComponent},
  {path:'products', component: ProductListComponent, data: {animation: 'FilterPage'}},
  {path:'upload', component: UploaderComponent},
  {path:'products/details', component: ProductComponent},
  {path:'about', component: AboutUsComponent, data: {animation: 'AboutPage'}},
  {path:'contact', component: ContactComponent},
  {path:'orders', component: OrderComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'cart/form', component: ShoppingCartFormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
