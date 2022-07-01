import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";
import {MatButtonModule} from '@angular/material/button';
import {AppCommonModule} from "./common/common.module";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {LoginModule} from "./login/login.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PatientModule} from "./patient/patient.module";
import {RegistrationModule} from "./registration/registration.module";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    AppCommonModule,
    LoginModule,
    BrowserAnimationsModule,
    PatientModule,
    RegistrationModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
