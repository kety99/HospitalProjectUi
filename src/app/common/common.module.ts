import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailsComponent } from './details/details.component';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations:[
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AuthService]
})
export class AppCommonModule { }
