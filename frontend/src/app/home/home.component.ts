import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../core/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filter;
  sortOptions;
  myUser$ = this._localStorageService.myUser$;
  createHidden = true;

  constructor(private router: Router, private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    //Get the current authenticated account
    this._localStorageService.getUser();
    this.myUser$.subscribe(data => {
      if (data && data.role == "admin") {
        //Only andmin can create a new product
        this.createHidden = false;
      } else {
        this.createHidden = true;
      }
    })
  }

  receiveFilter($event) {
    this.filter = $event;
  }

  receiveSortOptions($event) {
    this.sortOptions = $event;
  }

  goToCreate() {
    this.router.navigateByUrl("/product-create")
  }

}
