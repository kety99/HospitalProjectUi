import {Injectable} from "@angular/core";
import {AuthService} from "../common/auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../model/patient";
import {Doctor} from "../model/doctor";

@Injectable()
export class DoctorsService {

  constructor(private authService: AuthService, private http: HttpClient) {

  }

  public getAll(): Observable<Array<Doctor>> {
    let url = '/api/doctors';

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.token);

    return this.http.get<Array<Doctor>>(url, { headers: headers });
  }
  getById(id: string): Observable<Doctor> {
    let url = '/api/doctors/' + id;

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.token);

    return this.http.get<Doctor>(url, { headers: headers });
  }

}
