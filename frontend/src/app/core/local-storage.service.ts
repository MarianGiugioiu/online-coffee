import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageRefService } from './local-storage-ref.service';
import { User, CartItem, CartList } from 'src/app/shared/interfaces';


@Injectable({ providedIn: 'root' })
export class LocalStorageService {
   private _localStorage: Storage;

   //Holds the data for the cart list as an observable
   private _myData$ = new BehaviorSubject<CartList>(null)
   public myData$ = this._myData$.asObservable()

   //Holds the data for the current authenticated user as an observable
   private _myUser$ = new BehaviorSubject<User>(null)
   public myUser$ = this._myUser$.asObservable()

   constructor(private _localStorageRefService: LocalStorageRefService) {
      this._localStorage = _localStorageRefService.localStorage
   }

   //Accessing and changing the cart list
   setInfo(data: CartList) {
      const jsonData = JSON.stringify(data)
      this._localStorage.setItem('CartList', jsonData)
      this._myData$.next(data);
   }

   loadInfo() {
      const data = JSON.parse(this._localStorage.getItem('CartList'))
      return(data);
   }

   loadInfoIntoData() {
      const data = JSON.parse(this._localStorage.getItem('CartList'))
      this._myData$.next(data);
   }

   clearInfo() {
      const data = {
         CartListName:"",
         CartItems:[]
      }
      const jsonData = JSON.stringify(data)
      this._localStorage.setItem('CartList', jsonData)
      this._myData$.next(data);
   }

   //Accessing and changing the user
   login(data: User) {
      const jsonData = JSON.stringify(data)
      this._localStorage.setItem('User', jsonData)
      this._myUser$.next(data);
   }

   getUser() {
      const data = JSON.parse(this._localStorage.getItem('User'))
      this._myUser$.next(data);
      return(data);
   }

   logout() {
      this._localStorage.removeItem('User');
      this._myUser$.next(null);
   }
}
