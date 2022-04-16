import { Component, OnInit, Input, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage.service';

@Component({
  selector: 'app-cart-list-name',
  templateUrl: './cart-list-name.component.html',
  styleUrls: ['./cart-list-name.component.css']
})
export class CartListNameComponent implements OnInit {
  cartListName="";

  constructor(private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.cartListName = this._localStorageService.loadInfo().CartListName;
  }

  saveName() {
    let result = this._localStorageService.loadInfo();
    result.CartListName = this.cartListName;
    this._localStorageService.setInfo(result);
  }

}
