import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private statusUrl = '/api/status';
  private productsUrl = '/api/products';

  constructor(private http: HttpClient) { }

  // Tests the connection with the server
  getStatus(){
    return this.http.get(this.statusUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Access and modify(requires an authenticated admin account) the products

  getProduct(id) {
    let url = `${this.productsUrl}/${id}`;
    return this.http.get(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProducts(page, filterValue = "", filterColumn = "", sortColumn = "", sortOrder = "") {
    let queryParams = new HttpParams();

    //The number of elements returned from the API is restricted to a certain number per page
    //Specifies the n-th page of results (n is the number provided by the <page> parameter)
    queryParams = queryParams.append("page",page);

    if (filterValue != "") {
      //Add filter options for the query
      queryParams = queryParams.append("filterValue",filterValue);
      queryParams = queryParams.append("filterColumn",filterColumn);
    }

    if (sortColumn != "--") {
      //Add sorting options for the query
      queryParams = queryParams.append("sortColumn",sortColumn);
      queryParams = queryParams.append("sortOrder",sortOrder);
    }

    return this.http.get(this.productsUrl,{params:queryParams})
      .pipe(
        catchError(this.handleError)
      );
  }

  addProduct(product, token) {
    //Add access token to the header of the request
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` });
    let options = { headers: headers };

    return this.http.post(this.productsUrl, product, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateProduct(id, product, token) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` });
    let options = { headers: headers };

    let url = `${this.productsUrl}/${id}`;

    return this.http.put(url, product, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteProduct(id, token) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` });
    let options = { headers: headers };

    let url = `${this.productsUrl}/${id}`;

    return this.http.delete(url, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Sends an alert message to the user when an error appears
  private handleError(error: any) {
    let errorMsg;

    if (Math.floor(error.status/100) == 4) {
      errorMsg = `Error: ${error.error}`;
      alert(errorMsg)
    }

    if (Math.floor(error.status/100) == 5) {
      errorMsg = `Error: There is an error with the server`;
      alert(errorMsg)
    }
    return throwError(error.message);
  }
}