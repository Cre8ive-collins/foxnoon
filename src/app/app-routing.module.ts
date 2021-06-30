import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateaccountComponent } from './auth/createaccount/createaccount.component';
import { LoginComponent } from './auth/login/login.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { HomeComponent } from './components/home/home.component';
import { SingleProductComponent } from './components/single-product/single-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "createaccount",
    component: CreateaccountComponent,
  },
  {
    path: "singleproduct/:id",  
    component: SingleProductComponent,
  },

  {
    path: "cart",
    component: CartItemComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
