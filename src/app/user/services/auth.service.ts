import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email, password) {
    const endPoint = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQxhgRC_iNE48Wj8xWiAKdOdwLvZkc6-k';
    const data = { email, password, returnSecureToken: true };
    return this.http.post(endPoint, data);
  }
}