import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addForm = new FormGroup({
    title: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required)
    
  })
  constructor(private products:ProductsService) { }

  ngOnInit(): void {
  }

  saveProduct(){
    const produit = this.addForm.value;

    console.log(produit);

    this.products.addNewProduct(produit);
    
  }

}
