import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ProductDetailsComponent } from "./Products/product-details/product-details.component";
import { ProductListComponent } from "./Products/product-list/product-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: WelcomeComponent, pathMatch: "full" },
  { path: "products", component: ProductListComponent },
  { path: "products/:id", component: ProductDetailsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
