import { ProductService } from "./../product.service";
import { IProduct } from "./../../models/product";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = "Product Details";
  product: IProduct;
  constructor(
    private Route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}
  ngOnInit() {
    this.productService
      .getProduct(+this.Route.snapshot.paramMap.get("id"))
      .subscribe(p => {
        this.product = p;
      });
  }

  onBack() {
    this.router.navigate(["/products"]);
    console.warn(this.product);
  }
}
