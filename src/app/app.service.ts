import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class AppService {

  constructor(private httpClient: HttpClient) {
  }

  public getDoctors(): Observable<any> {
    let url = '/api/doctors';
    return this.httpClient.get(url);
  }



}
