import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {ProductListComponent} from './product-list/product-list.component';
import {ProductViewComponent} from './product-view/product-view.component';
import {LoginComponent } from './login/login.component';
import {ProductResolver} from './product.resolver';
import {RouterModule, Routes} from '@angular/router';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
=======
>>>>>>> 5471d3422c3825ce642ba70e96041f8fbbde379e

const routes:Routes= [
  {
    path: 'list', component:ProductListComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductViewComponent,
    ProductListComponent,
<<<<<<< HEAD
    NavbarComponent,
=======
>>>>>>> 5471d3422c3825ce642ba70e96041f8fbbde379e



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
