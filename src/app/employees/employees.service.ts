import {Injectable} from "@angular/core";
import {AuthService} from "../common/auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Doctor} from "../model/doctor";
import {Employee} from "../model/employee";

@Injectable()
export class EmployeesService {

  constructor(private authService: AuthService, private http: HttpClient) {

  }

  public getAll(): Observable<Array<Employee>> {
    let url = '/api/employees';

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.token);

    return this.http.get<Array<Employee>>(url, { headers: headers });
  }

}
