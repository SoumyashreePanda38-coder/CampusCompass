import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any = {};

  subjects: any[] = [];
  skills: any[] = [];
  tasks: any[] = [];

  ngOnInit(): void {

    const storedUser =
      localStorage.getItem('currentUser');

    if (storedUser) {

      this.user = JSON.parse(storedUser);

    }

    const storedSubjects =
      localStorage.getItem('subjects');

    if (storedSubjects) {

      this.subjects = JSON.parse(storedSubjects);

    }

    const storedSkills =
      localStorage.getItem('skills');

    if (storedSkills) {

      this.skills = JSON.parse(storedSkills);

    }

    const storedTasks =
      localStorage.getItem('tasks');

    if (storedTasks) {

      this.tasks = JSON.parse(storedTasks);

    }

  }

}