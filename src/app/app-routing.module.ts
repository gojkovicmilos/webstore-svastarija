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
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'', component: HomePageComponent, data: {animation: 'HomePage'}},
  {path:'users', component: UserListComponent},
  {path:'products', component: ProductListComponent, data: {animation: 'FilterPage'}},
  {path:'upload', component: UploaderComponent},
  {path:'products/details', component: ProductComponent},
  {path:'about', component: AboutUsComponent, data: {animation: 'AboutPage'}},
  {path:'contact', component: ContactComponent},
  {path:'orders', component: OrderComponent, canActivate: [AuthService]},
  {path:'newProduct', component: AddProductComponent, canActivate: [AuthService]},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart/form', component: ShoppingCartFormComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
