import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { JwtInterceptor } from './jwt.interceptor';

import {ProductListComponent} from './product-list/product-list.component';
import {ProductViewComponent} from './product-view/product-view.component';
import {LoginComponent } from './login/login.component';
import {ProductResolver} from './product.resolver';
import {ProductsResolver} from './products.resolver';
import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
const routes:Routes= [
  {path: 'add-delete-product', component: ProductFormComponent
  },
  {path: 'checkout', component: CheckoutFormComponent},
  { path: '', pathMatch: "full", redirectTo: 'login' },
  {path: 'list', component:ProductListComponent},
  { path: 'login-form', component: LoginComponent },
  {
    path: 'list', resolve: {
      products: ProductsResolver
    },
    component: ProductListComponent,
    children: [{
      path:"view/:productId",
      resolve: {
        product: ProductResolver
      },
      component: ProductViewComponent
    }
    ]
  }, 
  {
    path: "edit/:productId",
    resolve: {
      product: ProductResolver
    }, 
    component: ProductFormComponent
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
    ProductFormComponent,
    CheckoutFormComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
