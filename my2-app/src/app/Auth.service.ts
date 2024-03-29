import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(credentials: { email: string; password: string }) {
    return this.http.post<any>('http://localhost:4000/auth/login', credentials);
  }

  signup(userData: { username: string; email: string; password: string }) {
    return this.http.post<any>('http://localhost:4000/auth/signup', userData);
  }
}
