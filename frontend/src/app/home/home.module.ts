import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home.component';
import { SortingOptionsComponent } from './sorting-options/sorting-options.component';
import { FilterComponent } from './filter/filter.component';
import { ProductComponent } from './product-list/product/product.component';
import { CartListNameComponent } from './cart-list-name/cart-list-name.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    ProductListComponent,
    HomeComponent,
    SortingOptionsComponent,
    FilterComponent,
    ProductComponent,
    CartListNameComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatSelectModule
  ]
})
export class HomeModule { }
