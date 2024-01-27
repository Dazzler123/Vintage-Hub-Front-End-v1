import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class SaveFailedAlertService {
  triggerSaveFailedAlert(title: string, duration: number) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: title,
      showConfirmButton: false,
      timer: duration
    })
  }
}
