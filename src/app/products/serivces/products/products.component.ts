import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';


@Injectable ({
  providedIn:'root'
})

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private http:HttpClient) {}

  @NgModule({
    declarations:[AppComponent],
    imports:[BrowserModule, CommonModule],
  })

  getProductById(id:any) {
    return this.http.get('https://fakestoreapi.com/products/' + id)
  }

  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products')
  }

  getcatgoryone() {
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

  getProductsByCat(keyword:string) {
    return this.http.get('https://fakestoreapi.com/products/category/' + keyword)
  }

}
