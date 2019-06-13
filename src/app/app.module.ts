import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./Products/product-list/product-list.component";
import { ProductDetailsComponent } from "./Products/product-details/product-details.component";
import { NavComponent } from "./shared/nav/nav.component";
import { RatingComponent } from "./shared/rating/rating.component";
import { ProductService } from "./Products/product.service";
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    NavComponent,
    RatingComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
