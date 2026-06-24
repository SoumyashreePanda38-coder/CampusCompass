import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  showPasswordForm = false;

  currentPassword = '';
  newPassword = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  togglePasswordForm() {

    this.showPasswordForm =
      !this.showPasswordForm;

  }

  changePassword() {

    const registeredUser = JSON.parse(
      localStorage.getItem('registeredUser') || '{}'
    );

    if (
      registeredUser.password !==
      this.currentPassword
    ) {
      alert('Current password is incorrect');
      return;
    }

    if (
      this.newPassword !==
      this.confirmPassword
    ) {
      alert('Passwords do not match');
      return;
    }

    registeredUser.password =
      this.newPassword;

    localStorage.setItem(
      'registeredUser',
      JSON.stringify(registeredUser)
    );

    localStorage.setItem(
      'currentUser',
      JSON.stringify(registeredUser)
    );

    alert('Password changed successfully');

    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';

    this.showPasswordForm = false;
  }

  logout() {

    localStorage.removeItem('currentUser');

    this.router.navigate(['/login']);
  }

}