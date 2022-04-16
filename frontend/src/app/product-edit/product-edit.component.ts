import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../core/local-storage.service';
import { ProductsService } from '../core/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  data;
  id;
  myUser$ = this._localStorageService.myUser$;

  constructor(private productService: ProductsService, 
    private route: ActivatedRoute,
    private router: Router,
    private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    //Get the details of the product with the specified id
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService
      .getProduct(this.id)
      .subscribe((result: any) => {
        if (result){
          this.data = result;
        }
      });

    //Only admins can edit a product
    this._localStorageService.getUser();
    this.myUser$.subscribe(data => {
      if (!data || data.role != "admin") {
        this.router.navigateByUrl("/")
      }
    })
  }

  save() {
    //Get the access token from the local storage
    let token = this._localStorageService.getUser().token;
    this.productService.updateProduct(this.id, this.data, token).subscribe();
  }

  delete() {
    let token = this._localStorageService.getUser().token;
    this.productService.deleteProduct(this.id, token).subscribe(() => {
      this.router.navigateByUrl('/')
    });
  }

}
