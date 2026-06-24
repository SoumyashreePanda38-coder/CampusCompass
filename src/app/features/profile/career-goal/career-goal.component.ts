import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career-goal',
  templateUrl: './career-goal.component.html',
  styleUrls: ['./career-goal.component.css']
})
export class CareerGoalComponent implements OnInit {

  user:any = {};

  ngOnInit(): void {

    const storedUser =
      localStorage.getItem('currentUser');

    if(storedUser){

      this.user = JSON.parse(storedUser);

    }

  }

}