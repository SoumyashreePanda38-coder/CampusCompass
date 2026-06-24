import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = {};

  ngOnInit(): void {

    const storedUser =
      localStorage.getItem('currentUser');

    if(storedUser){

      this.user = JSON.parse(storedUser);

    }

  }

}