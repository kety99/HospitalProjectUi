import {NgModule} from "@angular/core";
import {DoctorsComponent} from "../doctor/doctors.component";
import {BrowserModule} from "@angular/platform-browser";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {AppCommonModule} from "../common/common.module";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTableModule} from "@angular/material/table";
import {DoctorsService} from "../doctor/doctors.service";
import {EmployeesService} from "./employees.service";
import {EmployeesComponent} from "./employees.component";

@NgModule({
  declarations: [
    EmployeesComponent
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
  providers: [EmployeesService]
})
export class EmployeesModule {
}
