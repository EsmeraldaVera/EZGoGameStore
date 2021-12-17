import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { LoginComponent } from './login/login.component';
import { ProductResolver } from './product.resolver';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

import { WriteReviewComponent } from './write-review/write-review.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path: 'Login', component: LoginComponent,
    resolve: {},
    canActivate: [],
    canActivateChild: [],
    canDeactivate: []
  },
  {
    path: 'review', component: WriteReviewComponent
  },
  {
    path: 'View-Products', component: ProductListComponent
  },
  {
    
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductViewComponent,
    ProductListComponent,
    NavbarComponent,
    HeaderComponent,
  
    WriteReviewComponent,
    CartComponent



  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
