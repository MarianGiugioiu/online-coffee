import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  myInfo$ = this._localStorageService.myData$
  //Total cost of products in the cart list
  totalCost = 0;
  //Total quantity of products in the cart list
  totalQuantity = 0;

  constructor(private _localStorageService: LocalStorageService) {
   }

  ngOnInit(): void {
    //Get info about the cart list, whenever it changes, from the local storage
    this._localStorageService.loadInfoIntoData();

    this.myInfo$.subscribe(data => {
      //Reset values
      this.totalCost = 0;
      this.totalQuantity = 0;

      //Updates the values based on the current list of items in the cart
      let list = data.CartItems;
      list.forEach(item => {
        this.totalCost += item.quantity * item.price;
        this.totalQuantity += item.quantity;
      })
    })
  }

  emptyCart() {
    this._localStorageService.clearInfo();
  }
}
