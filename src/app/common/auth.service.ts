import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../model/user";
import { Patient } from "../model/patient";

@Injectable()
export class AuthService {
  token: string;
  user: User;

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): Observable<any> {
    let url = '/auth/token';
    let body = {
      username: username,
      password: password
    };

    return this.http.post(url, body);
  }

  public userDetails(): Observable<User> {
    let url = '/api/users/details';

    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);

    return this.http.get<User>(url, { headers: headers });
  }

  public register(user: User): Observable<User> {
    let url = '/api/users/create';

    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);

    return this.http.post<User>(url, user, { headers: headers });
  }

  public registerPatient(user: any): Observable<Patient> {
    let url = '/api/patients';

    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);

    return this.http.post<Patient>(url, user, { headers: headers });
  }

  public registerDoctor(user: any): Observable<User> {
    let url = '/api/doctors';

    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);

    return this.http.post<User>(url, user, { headers: headers });
  }

  public registerEmployee(user: any): Observable<User> {
    let url = '/api/employees';

    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);

    return this.http.post<User>(url, user, { headers: headers });
  }
}
