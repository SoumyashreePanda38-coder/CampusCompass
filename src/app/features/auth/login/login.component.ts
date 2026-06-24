import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {

    const user = JSON.parse(
      localStorage.getItem('registeredUser') || '{}'
    );

    if (
      user.email === this.email &&
      user.password === this.password
    ) {

      localStorage.setItem(
        'currentUser',
        JSON.stringify(user)
      );

      alert('Login Successful');

      this.router.navigate(['/home']);

    } else {

      alert('Invalid Email or Password');

    }
  }
}