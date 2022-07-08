import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../common/auth.service";
import { Patient } from "../model/patient";

@Injectable()
export class PatientService{

  constructor(private authService: AuthService){

  }

  public getAll(): Observable<Array<Patient>>{

  }

}
