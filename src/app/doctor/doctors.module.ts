import {NgModule} from "@angular/core";
import {PatientComponent} from "../patient/patient.component";
import {PatientDetailsComponent} from "../patient/details/patient-details.component";
import {BrowserModule} from "@angular/platform-browser";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {AppCommonModule} from "../common/common.module";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTableModule} from "@angular/material/table";
import {PatientService} from "../patient/patient.service";
import {DoctorsComponent} from "./doctors.component";
import {DoctorsService} from "./doctors.service";

@NgModule({
  declarations: [
    DoctorsComponent
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
  providers: [DoctorsService]
})
export class DoctorsModule {
}
