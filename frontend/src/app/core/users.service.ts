import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = '/api/users';

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(this.usersUrl + "/login", user)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Sends an alert message to the user when an error appears
  private handleError(error: any) {
    console.log(error)
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
