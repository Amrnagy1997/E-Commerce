import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './products/components/components.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
  {path:"products", component:ComponentsComponent},
  {path:"details/:id", component:ProductsDetailsComponent},
  {path:'cart', component:CartComponent},
  {path:"**", redirectTo:"products", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
