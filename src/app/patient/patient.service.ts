import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../common/auth.service";
import { Patient } from "../model/patient";

@Injectable()
export class PatientService {

  constructor(private authService: AuthService, private http: HttpClient) {

  }

  public getAll(): Observable<Array<Patient>> {
    let url = '/api/patients';

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.token);

    return this.http.get<Array<Patient>>(url, { headers: headers });
  }

  getById(id: string): Observable<Patient> {
    let url = '/api/patients/' + id;

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.token);

    return this.http.get<Patient>(url, { headers: headers });
  }

}
