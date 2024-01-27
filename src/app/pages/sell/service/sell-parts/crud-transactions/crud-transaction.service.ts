import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudTransactionService {
  // Replace with your Python backend URL
  private backendUrl = 'http://127.0.0.1:5000/';

  constructor(private http: HttpClient) {}

  // Method to send data to Python backend
  saveSparePart(formData: any): Observable<any> {
    // Adjust the URL and API endpoint based on your backend
    const apiUrl = `${this.backendUrl}/api/parts/save-part`;

    // Send a POST request to the backend
    return this.http.post(apiUrl, formData);
  }
}
