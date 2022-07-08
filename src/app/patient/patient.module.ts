import { NgModule } from "@angular/core";
import { LoginComponent } from "../login/login.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from "@angular/common/http";
import { AppCommonModule } from "../common/common.module";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PatientComponent } from "./patient.component";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { PatientDetailsComponent } from "./details/patient-details.component";
import { PatientService } from "./patient.service";

@NgModule({
  declarations: [
    PatientComponent,
    PatientDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    HttpClientModule,
    AppCommonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule
  ],
  providers: [PatientService]
})
export class PatientModule {
}
