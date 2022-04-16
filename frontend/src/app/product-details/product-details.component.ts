import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../core/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  data;
  id;

  constructor(private productService: ProductsService, private route: ActivatedRoute, private router: Router) { }

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
  }

}
