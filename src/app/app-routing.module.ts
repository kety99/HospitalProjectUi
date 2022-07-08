import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { PatientDetailsComponent } from './patient/details/patient-details.component';
import {PatientComponent} from "./patient/patient.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'patient',
    component: PatientComponent
  }, {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'patient/details/:id',
    component: PatientDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
