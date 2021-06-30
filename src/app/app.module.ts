import { Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DealComponent } from './components/deal/deal.component';
import { ProductsComponent } from './components/products/products.component';
import { ClothCatComponent } from './components/cloth-cat/cloth-cat.component';
import { Gallary2Component } from './components/gallary2/gallary2.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateaccountComponent } from './auth/createaccount/createaccount.component';
import { SwiperModule } from 'swiper/angular';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { RatingModule } from 'ng-starrating';
import { CartItemComponent } from './cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderMenuComponent,
    GalleryComponent,
    DealComponent,
    ProductsComponent,
    ClothCatComponent,
    Gallary2Component,
    NavComponent,
    FooterComponent,
    LoginComponent,
    CreateaccountComponent,
    SingleProductComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    SwiperModule,
    RatingModule    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
