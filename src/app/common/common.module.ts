import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class AppCommonModule { }
