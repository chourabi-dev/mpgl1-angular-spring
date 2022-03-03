import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private connected:boolean = false;
  constructor() { }


  getCoonectionStatus(){
    return this.connected; 
  }


  setCoonection(){
    this.connected = true;
  }
}
