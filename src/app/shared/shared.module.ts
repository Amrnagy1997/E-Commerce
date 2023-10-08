import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponen } from './components/select/select.component';
import { ProductComponent } from '../products/components/product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductsDetailsComponent } from '../products/products-details/products-details.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponen,
    ProductComponent,
    ProductsDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports : [
    HeaderComponent,
    SpinnerComponent,
    SelectComponen,
    ProductComponent,
    FormsModule
  ],
})
export class SharedModule { }
