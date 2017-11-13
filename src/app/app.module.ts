import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserService} from './user.service';
import {AuthguardserviceService} from './authguardservice.service';
import {HttpClientModule} from '@angular/common/http';
import {ProductserviceService} from './productservice.service';
import {FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';





import { AppComponent } from './app.component';
import { DashboardComponent, PairsPipe } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';



 const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardserviceService]},
  { path: '', component: LoginComponent},
  { path: 'product', component: ProductComponent,canActivate: [AuthguardserviceService]},
  { path: 'create', component: NewProductComponent,canActivate: [AuthguardserviceService]},
  { path: 'payment', component: PaymentComponent,canActivate: [AuthguardserviceService]},
  { path: 'cart', component: CartComponent,canActivate: [AuthguardserviceService]},
]; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PairsPipe,
    ProductComponent,
    NewProductComponent,
    PaymentComponent,
    CartComponent  
  ],
  imports: [
    RouterModule.forRoot(appRoutes), 
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule   
  ],
  providers: [UserService,
     AuthguardserviceService, 
    ProductserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
