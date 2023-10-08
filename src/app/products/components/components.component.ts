import { Component, Input, OnInit } from '@angular/core';
import { ProductsComponent } from '../serivces/products/products.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { CommonModule, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { product } from '../models/products';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
 
  products:product[]=[]
  productsone:string[]=[]
  loading:boolean = false;
  cartProducts:any [] = []

  @NgModule({
    declarations:[AppComponent],
    imports:[CommonModule,BrowserModule]
  })
 
  ngOnInit(): void {
    this.getProducts()
    this.getProductsOne()
  }
  constructor(private service:ProductsComponent){}

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res
      this.loading = false;
    }, error => {
      console.log(error)
      this.loading = false;
    })
}

  addToCart(event:any) {
    if("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if (exist) {
        alert("product is already in your cart")
      } else {
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))  
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }

getProductsOne() {
  this.loading = true;
  this.service.getcatgoryone().subscribe((one:any) => {
    this.productsone = one
    this.loading = false;
  }, error => {
    this.loading = false;
  })
}

filterCategory(event:any) {
  let value = event.target.value;
   if (value == "all") {
    this.getProducts();
   } else {
    this.getProductscat(value);
   }
}

 getProductscat(keyword:string) {
  this.loading = true;
  this.service.getProductsByCat(keyword).subscribe((res:any) => {
    this.products = res
    this.loading = false;
  }, error => {
    this.loading = false;
  })

}}


