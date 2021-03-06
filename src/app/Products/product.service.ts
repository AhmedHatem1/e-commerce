import { IProduct } from "./../models/product";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private productUrl = "./assets/api/products.json";

  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct> | undefined {
    return this.getProducts().pipe(
      map((products: IProduct[]) =>
        products.find(product => product.productId === id)
      )
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${
        err.message
      }`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  addProduct(newProduct) {
    return this.http.post(this.productUrl, newProduct);
  }
}
