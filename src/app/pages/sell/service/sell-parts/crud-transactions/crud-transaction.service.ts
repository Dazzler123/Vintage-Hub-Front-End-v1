import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Resources} from "@app/common/resources";

@Injectable({
  providedIn: 'root'
})
export class CrudTransactionService {

  constructor(private http: HttpClient) {
  }

  saveSparePart(formData: any): Observable<any> {
    // Adjust the URL and API endpoint based on your backend
    const apiUrl = `${Resources.BACKEND_URL}/api/parts/v1-create-part`;

    // Send a POST request to the backend
    return this.http.post(apiUrl, formData);
  }
}
