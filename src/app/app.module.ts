import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ComponentsComponent } from './products/components/components.component';
import { CartsModule } from './carts/carts.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    CartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
