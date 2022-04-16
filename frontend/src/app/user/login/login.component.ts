import { Component, OnInit, Input, Output  } from '@angular/core';
import { UsersService } from 'src/app/core/users.service';
import {Router} from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { User } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";

  constructor(private usersService: UsersService, 
    private router: Router, 
    private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  login(){
    this.usersService.login({
      email: this.email,
      password: this.password
    }).subscribe(data => {
        console.log(data)
        this.localStorageService.login(data as User);
        this.router.navigateByUrl('/');
    })
  }

}
