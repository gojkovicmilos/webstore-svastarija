import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { ProductService } from './product.service';
import { UserService } from './user.service';
import { MaterialModule } from './material/material.module';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomePageComponent } from './home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ShoppingCartFormComponent } from './shopping-cart-form/shopping-cart-form.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth, AngularFireAuthModule} from "@angular/fire/auth";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    UserListComponent,
    UserComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    AboutUsComponent,
    ContactComponent,
    OrderComponent,
    MainNavComponent,
    HomePageComponent,
    ProductModalComponent,
    ShoppingCartComponent,
    ShoppingCartFormComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    LayoutModule,
    NgbModule, 
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [ProductService, UserService, AngularFireStorage],
  bootstrap: [AppComponent],
  entryComponents: [ProductModalComponent]
})
export class AppModule { }
