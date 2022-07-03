import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  token: string;

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string):Observable<any> {
    let url = '/auth/token';
    let body = {
      username: username,
      password: password
    };

    return this.http.post(url,body);
  }

  public userDetails(){
    let url = '/api/users/details';

    let headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);

    return this.http.get(url, {headers: headers});
  }
}
