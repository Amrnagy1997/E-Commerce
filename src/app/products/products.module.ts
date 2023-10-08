import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsComponent } from './serivces/products/products.component';



@NgModule({
  declarations: [
    ProductsComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
