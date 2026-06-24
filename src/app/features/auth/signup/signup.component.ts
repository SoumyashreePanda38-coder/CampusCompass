import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    collegeName: '',
    stream: '',
    branch: '',
    currentYear: '',
    graduationYear: '',
    semester: '',
    careerGoal: ''
  };

  constructor(private router: Router) {}

  register() {

    if (
      this.user.password !==
      this.user.confirmPassword
    ) {
      alert('Passwords do not match');
      return;
    }

    localStorage.setItem(
      'registeredUser',
      JSON.stringify(this.user)
    );

    alert('Registration Successful');

    this.router.navigate(['/login']);
  }
}