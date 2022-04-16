import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { ProductsService } from './products.service';
import { LocalStorageService } from './local-storage.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ HttpClientModule, SharedModule, MatSnackBarModule],
    providers: [ ProductsService, LocalStorageService ]
})
export class CoreModule { }