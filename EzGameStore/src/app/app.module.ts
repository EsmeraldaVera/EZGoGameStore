import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReviewComponent } from './review/review.component';
import { WriteReviewComponent } from './write-review/write-review.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReviewComponent,
    WriteReviewComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
