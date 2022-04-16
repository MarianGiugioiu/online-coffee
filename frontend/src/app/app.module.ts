import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { UserModule } from './user/user.module';
import { ProductDetailsModule } from './product-details/product-details.module';
import { ProductEditModule } from './product-edit/product-edit.module';
import { ProductCreateModule } from './product-create/product-create.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    UserModule,
    ProductDetailsModule,
    ProductEditModule,
    ProductCreateModule,
    MatSnackBarModule
  ],
  exports:[MatButtonModule, MatSnackBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
