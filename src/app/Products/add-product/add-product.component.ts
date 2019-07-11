import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.scss"]
})
export class AddProductComponent implements OnInit {
  pageTitle: string = "Add Product";
  newProduct = {
    productId: 0,
    productName: "",
    productCode: "",
    releaseDate: "",
    description: "",
    price: "",
    starRating: "",
    imageUrl: ""
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {}
  onAddFormSubmitted(form: NgForm) {
    this.productService.addProduct(this.newProduct).subscribe(x => {
      console.log(x);
    });
    console.log(this.newProduct);
  }
  onkeyup(input: HTMLTextAreaElement) {
    console.log(input.maxLength);
  }
}
