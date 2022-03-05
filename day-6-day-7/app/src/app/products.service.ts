import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products:any[] = [];

  constructor() { }


  addNewProduct(p){
    this.products.push(p);
  }


  getProductsList(){
    return this.products;
  }
}
