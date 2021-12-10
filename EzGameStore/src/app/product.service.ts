import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl= "http://localhost:8080/api/products";

  constructor(private httpClient: HttpClient) { }

  getAllProducts(){
    return this.httpClient.get(this.apiUrl);
  }

  getProducts(productId: number) {
    return this.httpClient.get(this.apiUrl + "/" + productId);
  }

  getReviews(productId: number) {
    return this.httpClient.get(`${this.apiUrl}/${productId}/reviews`)
  }
  saveReview(review: any) {
    return this.httpClient.post(this.apiUrl + "/" + 1 + "/reviews", review)
  }
}
