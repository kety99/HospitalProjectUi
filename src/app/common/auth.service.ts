import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

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
}
