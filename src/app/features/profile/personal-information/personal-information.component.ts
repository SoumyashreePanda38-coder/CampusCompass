import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  user: any = {};

  ngOnInit(): void {

    const storedUser =
      localStorage.getItem('currentUser');

    if(storedUser){

      this.user = JSON.parse(storedUser);

    }

  }

}