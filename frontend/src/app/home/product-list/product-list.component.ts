import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  products = [];
  page = 1;
  @Input() filter;
  @Input() sortOptions;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    //Initialise options for filter and sorting
    this.filter = {
      value: "",
      column: ""
    };

    this.sortOptions = {
      column: "",
      order: ""
    };

    //Gets the products for the current page
    this.productService
      .getProducts(this.page)
      .subscribe((result: any) => {
        this.products = result.data;
      });
  }

  changePage(value) {
    //Page number cannot be less than 1
    if (this.page == 1 && value == -1)
      return;

    this.page += value;

    this.productService
      .getProducts(this.page)
      .subscribe((result: any) => {
        this.products = result.data;
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
      //If the options for filter and sorting are changed
      if ((changes['filter'] && changes['filter'].currentValue) ||
      (changes['sortOptions'] && changes['sortOptions'].currentValue)) {
        this.getProductsWithOptions()
      }
  }

  getProductsWithOptions() {
    //Reset page number
    this.page = 1;

    //Gets the products for the current page and options for filter and sorting
    this.productService
      .getProducts(this.page, 
        this.filter.value, 
        this.filter.column, 
        this.sortOptions.column, 
        this.sortOptions.order)
      .subscribe((result: any) => {
        this.products = result.data;
      });
  }

}
