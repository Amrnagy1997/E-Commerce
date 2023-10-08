import { Component, Input, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { ProductsComponent } from '../serivces/products/products.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  @NgModule({
    declarations:[AppComponent,],
    imports:[BrowserModule, CommonModule,],
  })

   products:any[]=[]
  id:any
  data:any = []
  loading:boolean = false
  constructor(private service:ProductsComponent, private route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }


  ngOnInit(): void {  
    this.getProduct()
  }

  getProduct() {
    this.loading = true
    this.service.getProductById(this.id).subscribe(res => {
      this.loading = false
      this.data = res
    }, error => {
      this.loading = false
      alert(error)
    })
  }

  }

