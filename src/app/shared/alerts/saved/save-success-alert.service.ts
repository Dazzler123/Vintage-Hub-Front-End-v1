import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class SaveSuccessAlertService {
  triggerSaveSuccessAlert(title: string, duration: number) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: title,
      showConfirmButton: false,
      timer: duration
    })
  }
}
