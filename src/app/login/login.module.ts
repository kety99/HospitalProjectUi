import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';
import {LoginComponent} from "./login.component";
import {AppCommonModule} from "../common/common.module";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent
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
    RouterModule
  ],
})
export class LoginModule {
}
