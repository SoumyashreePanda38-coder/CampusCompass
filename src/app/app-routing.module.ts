import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './features/landing/landing.component';

import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/signup/signup.component';

import { HomeComponent } from './features/home/home.component';

import { AcademicsComponent } from './features/academics/academics.component';

import { SkillsComponent } from './features/skills/skills.component';

import { PlannerComponent } from './features/planner/planner.component';

import { CareerComponent } from './features/career/career.component';

import { ProfileComponent } from './features/profile/profile.component';
import { PersonalInformationComponent } from './features/profile/personal-information/personal-information.component';

import { AcademicInformationComponent } from './features/profile/academic-information/academic-information.component';

import { CareerGoalComponent } from './features/profile/career-goal/career-goal.component';

import { SettingsComponent } from './features/profile/settings/settings.component';
const routes: Routes = [

  {
    path: '',
    component: LandingComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'academics',
    component: AcademicsComponent
  },

  {
    path: 'skills',
    component: SkillsComponent
  },

  {
    path: 'planner',
    component: PlannerComponent
  },

  {
    path: 'career',
    component: CareerComponent
  },

  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: 'profile/personal',
    component: PersonalInformationComponent
  },

  {
    path: 'profile/academic',
    component: AcademicInformationComponent
  },

  {
    path: 'profile/career-goal',
    component: CareerGoalComponent
  },

  {
    path: 'profile/settings',
    component: SettingsComponent
  },

  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}