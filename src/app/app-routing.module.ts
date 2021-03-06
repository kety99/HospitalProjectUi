import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './common/details/details.component';
import { LoginComponent } from "./login/login.component";
import { PatientComponent } from "./patient/patient.component";
import { RegistrationComponent } from "./registration/registration.component";
import {DoctorsComponent} from "./doctor/doctors.component";
import {EmployeesComponent} from "./employees/employees.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'patients',
    component: PatientComponent,
    pathMatch: 'full'
  }, {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: ':type/details/:id',
    component: DetailsComponent,
    pathMatch: 'full'
  },{
    path: 'doctors',
    component: DoctorsComponent,
    pathMatch: 'full'
  },{
    path: 'employees',
    component: EmployeesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
