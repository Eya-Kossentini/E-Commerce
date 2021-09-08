import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private addProductUrl = "http://localhost:8080/products/add"
  private allProductUrl = "http://localhost:8080/products/all"

  private updateProductUrl = "http://localhost:8080/products/update"
  private getProductbyidUrl = "http://localhost:8080/products/one/"
  private deleteProductUrl = "http://localhost:8080/products/delete/";

  constructor(private http: HttpClient) { }

  public addProduct(product: Product) {
    let dataFromAPI = this.http.post<any>(this.addProductUrl, product)
    return dataFromAPI
  }

  public allProduct() {
    let dataFromAPI = this.http.get<any>(this.allProductUrl)
    return dataFromAPI
  }

  updateProduct(product: Product) {
    return this.http.patch<any>(this.updateProductUrl, product)
  }

  getOneProduct(id: any) {
    return this.http.get<any>(this.getProductbyidUrl + id)
  }

  deleteProduct(id: any) {
    return this.http.delete<any>(this.deleteProductUrl+id)
  }
}




