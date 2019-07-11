import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./Products/product-list/product-list.component";
import { ProductDetailsComponent } from "./Products/product-details/product-details.component";
import { NavComponent } from "./shared/nav/nav.component";
import { RatingComponent } from "./shared/rating/rating.component";
import { ProductService } from "./Products/product.service";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { AddProductComponent } from "./Products/add-product/add-product.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    NavComponent,
    RatingComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AddProductComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
