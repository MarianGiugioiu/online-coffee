import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../core/local-storage.service';
import { ProductsService } from '../core/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  data;
  myUser$ = this._localStorageService.myUser$;

  constructor(private productService: ProductsService, 
    private route: ActivatedRoute,
    private router: Router,
    private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.data = {
      "name": "",
      "price": 0,
      "quantity": 0,
      "description": "",
      "comments": "",
      "imageURL": "",
      "imageCredits": "",
      "rating": 1
    };
    this._localStorageService.getUser();
    this.myUser$.subscribe(data => {
      if (!data || data.role != "admin") {
        this.router.navigateByUrl("/")
      }
    })
  }

  create() {
    let token = this._localStorageService.getUser().token;
    this.productService.addProduct(this.data, token).subscribe(() => {
      this.router.navigateByUrl('/')
    });
  }

}
