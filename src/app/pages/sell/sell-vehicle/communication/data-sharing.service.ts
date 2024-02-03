import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Resources} from "@common/resources";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  formData: any = {};

  constructor(private http : HttpClient) {
  }

  getVehicleMakes(): Observable<string[]> {
    const apiUrl = `${Resources.BACKEND_URL}/api/vehicle/v1-get-vehicle-makes`;
    return this.http.get<string[]>(apiUrl);
  }

  getVehicleModels(make: string | undefined): Observable<string[]> {
    const apiUrl = `${Resources.BACKEND_URL}/api/vehicle/v1-get-matching-vehicle-models?make=${make}`;
    return this.http.get<string[]>(apiUrl);
  }
}
