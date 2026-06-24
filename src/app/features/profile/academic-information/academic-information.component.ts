import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-information',
  templateUrl: './academic-information.component.html',
  styleUrls: ['./academic-information.component.css']
})
export class AcademicInformationComponent implements OnInit {

  user:any = {};

  ngOnInit(): void {

    const storedUser =
      localStorage.getItem('currentUser');

    if(storedUser){

      this.user = JSON.parse(storedUser);

    }

  }

}