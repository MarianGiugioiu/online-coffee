import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../core/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myUser$ = this._localStorageService.myUser$
  loginHidden = false;
  userName = ""

  constructor(private _localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    this._localStorageService.getUser();
    this.myUser$.subscribe(data => {
      if (data) {
        //Shows username and logout button
        this.loginHidden = true;
        this.userName = `${data.firstName} ${data.lastName}${data.role=='admin' ? '(admin)' : ""}`
      } else {
        //Shows sign up button
        this.loginHidden = false;
      }
    })
  }

  logout() {
    //Clears the local storage
    this._localStorageService.clearInfo();
    this._localStorageService.logout();
    this._localStorageService.getUser();
  }

  login() {
    this.router.navigateByUrl('/login');
  }

}
