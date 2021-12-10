import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  private baseUrl = "http://localhost:8080/user/login"

  constructor(private httpClient: HttpClient) { }


  handleLogin(user: User):Observable<object>{
    console.log(user)
    return this.httpClient.post(`${this.baseUrl}`, user);
  }
}