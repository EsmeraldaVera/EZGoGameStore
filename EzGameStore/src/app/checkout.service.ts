import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  apiUrl= "http://localhost:8080/api/credit_cards";

  constructor(private httpClient: HttpClient) { }
}

