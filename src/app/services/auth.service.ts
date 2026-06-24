import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(user: any): void {

    localStorage.setItem(
      'registeredUser',
      JSON.stringify(user)
    );

  }

  login(email: string, password: string): boolean {

    const user = JSON.parse(
      localStorage.getItem('registeredUser') || '{}'
    );

    if (
      user.email === email &&
      user.password === password
    ) {

      localStorage.setItem(
        'currentUser',
        JSON.stringify(user)
      );

      return true;
    }

    return false;
  }

  getUser() {

    return JSON.parse(
      localStorage.getItem('currentUser') || '{}'
    );

  }

  getRegisteredUser() {

    return JSON.parse(
      localStorage.getItem('registeredUser') || '{}'
    );

  }

  logout(): void {

    localStorage.removeItem(
      'currentUser'
    );

  }

  isLoggedIn(): boolean {

    return !!localStorage.getItem(
      'currentUser'
    );

  }

}