import { ProductService } from "./../product.service";
import { IProduct } from "./../../models/product";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  errorMessage = "";

  filterProducts(filterKeyword: string = "") {
    this.filteredProducts = this.products.filter(product =>
      product.productName
        .toLowerCase()
        .includes(filterKeyword.toLocaleLowerCase())
    );
  }
  constructor(private productService: ProductService) {}
  ona(message) {
    console.log(message);
  }
  ngOnInit() {
    this.productService.getProducts().subscribe(
      product => {
        this.products = product;
        this.filteredProducts = product;
      },
      error => (this.errorMessage = error)
    );
  }
}
