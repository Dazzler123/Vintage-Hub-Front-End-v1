import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudTransactionService {
  // Python backend URL
  private backendUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  saveSparePart(formData: any): Observable<any> {
    // Adjust the URL and API endpoint based on your backend
    const apiUrl = `${this.backendUrl}/api/parts/v1-create-part`;

    // Send a POST request to the backend
    return this.http.post(apiUrl, formData);
  }
}
