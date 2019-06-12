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

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    NavComponent,
    RatingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
