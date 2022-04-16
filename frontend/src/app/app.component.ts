import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './core/local-storage.service';
import { ProductsService } from './core/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'node-express-angular';
  status = 'DOWN';


  private product = {
    'name': 'Breve',
    'price': 10,
    'quantity': 0,
    'description': '',
    'comments': ``,
    "rating": 0
  }

  constructor(private _localStorageService: LocalStorageService, private productService: ProductsService) {
    //Initialise the cart list
    if(!this._localStorageService.loadInfo()) {
      this._localStorageService.setInfo({
        CartListName: "",
        CartItems: []
      })
    }
  }

  ngOnInit() {
  }

  

}