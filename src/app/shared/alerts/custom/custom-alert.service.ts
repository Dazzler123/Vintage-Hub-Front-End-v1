import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class CustomAlertService {
  triggerCustomWarningAlert(title: string, duration: number) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: title,
      showConfirmButton: false,
      timer: duration
    })
  }
}
