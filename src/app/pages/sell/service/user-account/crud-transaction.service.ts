import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Resources} from "@common/resources";

@Injectable({
  providedIn: 'root'
})
export class CrudTransactionService {
  constructor(private http: HttpClient) {
  }

  createUserAccount(formData: any): Observable<any> {
    const apiUrl = `${Resources.BACKEND_URL}/api/user/v1-create-user`;
    return this.http.post(apiUrl, formData);
  }

  authenticateWithCredentials(username:string, password:string) {
    const credentials = {
      username: username,
      password: password,
    }

    const apiUrl = `${Resources.BACKEND_URL}/api/user/v1-authenticate-user`;
    return this.http.post(apiUrl, credentials);
  }
}
