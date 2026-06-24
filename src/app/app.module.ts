import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './features/landing/landing.component';
import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { HomeComponent } from './features/home/home.component';
import { AcademicsComponent } from './features/academics/academics.component';
import { SkillsComponent } from './features/skills/skills.component';
import { PlannerComponent } from './features/planner/planner.component';
import { CareerComponent } from './features/career/career.component';
import { ProfileComponent } from './features/profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CampusScoreCardComponent } from './shared/campus-score-card/campus-score-card.component';
import { StatCardComponent } from './shared/stat-card/stat-card.component';
import { UpcomingDeadlinesComponent } from './shared/upcoming-deadlines/upcoming-deadlines.component';
import { SkillProgressComponent } from './shared/skill-progress/skill-progress.component';
import { TodaysMissionComponent } from './shared/todays-mission/todays-mission.component';
import { NotificationBellComponent } from './shared/notification-bell/notification-bell.component';
import { ProfileAvatarComponent } from './shared/profile-avatar/profile-avatar.component';
import { SubjectsComponent } from './features/academics/subjects/subjects.component';
import { AcademicYearComponent } from './features/academics/subjects/academic-year/academic-year.component';
import { SubjectListComponent } from './features/academics/subjects/subject-list/subject-list.component';
import { OverviewComponent } from './features/academics/subjects/subject-dashboard/overview/overview.component';
import { SyllabusComponent } from './features/academics/subjects/subject-dashboard/syllabus/syllabus.component';
import { AssignmentsComponent } from './features/academics/subjects/subject-dashboard/assignments/assignments.component';
import { LabsComponent } from './features/academics/labs/labs.component';
import { LabListComponent } from './features/academics/labs/lab-list/lab-list.component';
import { LabCardComponent } from './features/academics/labs/lab-card/lab-card.component';
import { LabDashboardComponent } from './features/academics/labs/lab-dashboard/lab-dashboard.component';
import { LabRecordsComponent } from './features/academics/labs/lab-dashboard/lab-records/lab-records.component';
import { LabTestsComponent } from './features/academics/labs/lab-dashboard/lab-tests/lab-tests.component';
import { LabVivaComponent } from './features/academics/labs/lab-dashboard/lab-viva/lab-viva.component';
import { ExperimentsComponent } from './features/academics/labs/lab-dashboard/experiments/experiments.component';
import { AttendanceComponent } from './features/academics/labs/lab-dashboard/attendance/attendance.component';
import { SkillTrackerComponent } from './features/skills/skill-tracker/skill-tracker.component';
import { SkillCardComponent } from './features/skills/skill-tracker/skill-card/skill-card.component';
import { AddSkillComponent } from './features/skills/skill-tracker/add-skill/add-skill.component';
import { EditSkillComponent } from './features/skills/skill-tracker/edit-skill/edit-skill.component';
import { LearningGoalsComponent } from './features/skills/learning-goals/learning-goals.component';
import { DailyGoalsComponent } from './features/skills/learning-goals/daily-goals/daily-goals.component';
import { WeeklyGoalsComponent } from './features/skills/learning-goals/weekly-goals/weekly-goals.component';
import { MonthlyGoalsComponent } from './features/skills/learning-goals/monthly-goals/monthly-goals.component';
import { ProjectTrackerComponent } from './features/skills/project-tracker/project-tracker.component';
import { ProjectListComponent } from './features/skills/project-tracker/project-list/project-list.component';
import { ProjectCardComponent } from './features/skills/project-tracker/project-card/project-card.component';
import { ProjectDashboardComponent } from './features/skills/project-tracker/project-dashboard/project-dashboard.component';
import { ProjectOverviewComponent } from './features/skills/project-tracker/project-dashboard/project-overview/project-overview.component';
import { ProgressTrackerComponent } from './features/skills/project-tracker/project-dashboard/progress-tracker/progress-tracker.component';
import { RecommendationsComponent } from './features/skills/project-tracker/project-dashboard/recommendations/recommendations.component';
import { DailyPlannerComponent } from './features/planner/daily-planner/daily-planner.component';
import { TaskCardComponent } from './features/planner/daily-planner/task-card/task-card.component';
import { AddTaskComponent } from './features/planner/daily-planner/add-task/add-task.component';
import { WeeklyPlannerComponent } from './features/planner/weekly-planner/weekly-planner.component';
import { WeeklyGoalCardComponent } from './features/planner/weekly-planner/weekly-goal-card/weekly-goal-card.component';
import { AddWeeklyGoalComponent } from './features/planner/weekly-planner/add-weekly-goal/add-weekly-goal.component';
import { MonthlyPlannerComponent } from './features/planner/monthly-planner/monthly-planner.component';
import { MonthlyGoalCardComponent } from './features/planner/monthly-planner/monthly-goal-card/monthly-goal-card.component';
import { AddMonthlyGoalComponent } from './features/planner/monthly-planner/add-monthly-goal/add-monthly-goal.component';
import { ResumeStudioComponent } from './features/career/resume-studio/resume-studio.component';
import { ResumeBuilderComponent } from './features/career/resume-studio/resume-builder/resume-builder.component';
import { AtsCheckerComponent } from './features/career/resume-studio/ats-checker/ats-checker.component';
import { ResumeVersionsComponent } from './features/career/resume-studio/resume-versions/resume-versions.component';
import { InterviewPrepComponent } from './features/career/interview-prep/interview-prep.component';
import { HrQuestionsComponent } from './features/career/interview-prep/hr-questions/hr-questions.component';
import { TechnicalQuestionsComponent } from './features/career/interview-prep/technical-questions/technical-questions.component';
import { MockInterviewComponent } from './features/career/interview-prep/mock-interview/mock-interview.component';
import { AnswerVaultComponent } from './features/career/interview-prep/answer-vault/answer-vault.component';
import { PlacementReadinessComponent } from './features/career/placement-readiness/placement-readiness.component';
import { CareerRoadmapComponent } from './features/career/career-roadmap/career-roadmap.component';
import { CareerResourcesComponent } from './features/career/career-resources/career-resources.component';
import { LearningPlatformsComponent } from './features/career/career-resources/learning-platforms/learning-platforms.component';
import { CertificationsComponent } from './features/career/career-resources/certifications/certifications.component';
import { PracticePlatformsComponent } from './features/career/career-resources/practice-platforms/practice-platforms.component';
import { InterviewResourcesComponent } from './features/career/career-resources/interview-resources/interview-resources.component';
import { PersonalInformationComponent } from './features/profile/personal-information/personal-information.component';
import { AcademicInformationComponent } from './features/profile/academic-information/academic-information.component';
import { CareerGoalComponent } from './features/profile/career-goal/career-goal.component';
import { SettingsComponent } from './features/profile/settings/settings.component';
import { WelcomeBannerComponent } from './features/home/welcome-banner/welcome-banner.component';
import { PlacementReadinessCardComponent } from './features/home/placement-readiness-card/placement-readiness-card.component';
import { PlannerSnapshotComponent } from './features/home/planner-snapshot/planner-snapshot.component';
import { QuickActionsComponent } from './features/home/quick-actions/quick-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AcademicsComponent,
    SkillsComponent,
    PlannerComponent,
    CareerComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    CampusScoreCardComponent,
    StatCardComponent,
    UpcomingDeadlinesComponent,
    SkillProgressComponent,
    TodaysMissionComponent,
    NotificationBellComponent,
    ProfileAvatarComponent,
    SubjectsComponent,
    AcademicYearComponent,
    SubjectListComponent,
    OverviewComponent,
    SyllabusComponent,
    AssignmentsComponent,
    LabsComponent,
    LabListComponent,
    LabCardComponent,
    LabDashboardComponent,
    LabRecordsComponent,
    LabTestsComponent,
    LabVivaComponent,
    ExperimentsComponent,
    AttendanceComponent,
    SkillTrackerComponent,
    SkillCardComponent,
    AddSkillComponent,
    EditSkillComponent,
    LearningGoalsComponent,
    DailyGoalsComponent,
    WeeklyGoalsComponent,
    MonthlyGoalsComponent,
    ProjectTrackerComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectDashboardComponent,
    ProjectOverviewComponent,
    ProgressTrackerComponent,
    RecommendationsComponent,
    DailyPlannerComponent,
    TaskCardComponent,
    AddTaskComponent,
    WeeklyPlannerComponent,
    WeeklyGoalCardComponent,
    AddWeeklyGoalComponent,
    MonthlyPlannerComponent,
    MonthlyGoalCardComponent,
    AddMonthlyGoalComponent,
    ResumeStudioComponent,
    ResumeBuilderComponent,
    AtsCheckerComponent,
    ResumeVersionsComponent,
    InterviewPrepComponent,
    HrQuestionsComponent,
    TechnicalQuestionsComponent,
    MockInterviewComponent,
    AnswerVaultComponent,
    PlacementReadinessComponent,
    CareerRoadmapComponent,
    CareerResourcesComponent,
    LearningPlatformsComponent,
    CertificationsComponent,
    PracticePlatformsComponent,
    InterviewResourcesComponent,
    PersonalInformationComponent,
    AcademicInformationComponent,
    CareerGoalComponent,
    SettingsComponent,
    WelcomeBannerComponent,
    PlacementReadinessCardComponent,
    PlannerSnapshotComponent,
    QuickActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
