// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const accessToken = localStorage.getItem('accesstoken');
    if (accessToken) {
      // Optionally, you could also validate the token with the server here
      return true; // Token is present, allow access to the route
    } else {
      this.router.navigate(['/login']); // No token, redirect to login page
      return false;
    }
  }
}
