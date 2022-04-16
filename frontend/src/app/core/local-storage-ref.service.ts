import { Injectable } from '@angular/core';

function getLocalStorage(): Storage {
  return localStorage;
}

//Service that provides a reference to the local storage
@Injectable({ providedIn: "root" })
export class LocalStorageRefService {
  get localStorage(): Storage {
    return getLocalStorage();
  }
}
