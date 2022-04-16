import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {
  @Input() data;
  myInfo$ = this._localStorageService.myData$
  buttonHidden = false;
  selectedQuantity = 0;

  constructor(private _localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    //No quantity selected when the cart list is empty
    this.myInfo$.subscribe((info) => {
      if(info.CartItems.length == 0) {
        this.buttonHidden = false;
        this.selectedQuantity = 0;
      }
    })
  }

  //Adds item to the cart list
  hideButton() {
    this.buttonHidden = true;
    this.selectedQuantity++;
    this.addItemToCart();
  }

  changeSelectedQuantity(value) {
    //Limit the selected quantity between 1 and max quantity
    if (this.selectedQuantity < this.data.quantity || value < 0){
      this.selectedQuantity += value;
      this.addItemToCart();
    }

    if (this.selectedQuantity == 0){
      this.buttonHidden = false;
    }
  }

  addItemToCart() {
    let name = this._localStorageService.loadInfo().CartListName;
    let result = this._localStorageService.loadInfo().CartItems;

    let currentCartObjectId = result.findIndex(e => e.id === this.data.id);
    if (currentCartObjectId != -1) {
      //If the item already exists in the cart
      if (this.selectedQuantity > 0){
        result[currentCartObjectId].quantity = this.selectedQuantity;
      } else {
        //Remove item from cart if the selected quantity is 0
        result.splice(currentCartObjectId, 1);
      }
    } else {
      //Insert item and selected quantity in the cart
      let item = {
        'id': this.data.id,
        'name': this.data.name,
        'price': this.data.price,
        'quantity': this.selectedQuantity
      }
      result.push(item);
    }

    //Updates the local storage with the new cart list
    this._localStorageService.setInfo({
      CartListName:name,
      CartItems:result
    });
  }

  ngOnChanges(changes) {
    //When a new product is put in the field
    if (this.data){
      this.getItemFromCart();
    }
  }

  //Updates the state of the selected quantity based on the data in the local storage about the cart list
  getItemFromCart() {
    let result = this._localStorageService.loadInfo().CartItems;
    let currentCartObjectId = result.findIndex(e => e.id === this.data.id);
    if (currentCartObjectId != -1) {
      this.selectedQuantity = result[currentCartObjectId].quantity;
      this.buttonHidden = true;
    } else {
      this.selectedQuantity = 0;
      this.buttonHidden = false;
    }
  }

  //Navigate to the page for details or editing for the current product
  goToProduct() {
    let data = this._localStorageService.getUser();
    if (!data || data.role != "admin") {
      this.router.navigateByUrl(`/product-details/${this.data.id}`)
    } else {
      this.router.navigateByUrl(`/product-edit/${this.data.id}`)
    }
  }
}
