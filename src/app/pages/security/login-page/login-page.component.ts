import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CrudTransactionService} from "../../sell/service/user-account/crud-transaction.service";
import {SaveSuccessAlertService} from "../../../shared/alerts/saved/save-success-alert.service";
import {SaveFailedAlertService} from "../../../shared/alerts/saved/save-failed-alert.service";
import {Messages} from "@common/parts/messages";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  username: string = '';
  password: string = '';
  isVendorAccount: boolean | undefined;

  constructor(private router: Router, private crudService: CrudTransactionService, private successAlertService: SaveSuccessAlertService,
              private failedAlertService: SaveFailedAlertService) {
  }
  authenticateUser() {
    //authenticate as vendor
    if (this.isVendorAccount) {
      console.log("Vendor")
    } else {
      this.crudService.authenticateWithCredentials(this.username, this.password).subscribe(
        (user: any) => {
          console.log(user)
          if (user != undefined) {
            this.successAlertService.triggerSaveSuccessAlert(Messages.PART_SAVED, 1600);
            console.log('Data saved successfully');
          } else {
            this.failedAlertService.triggerSaveFailedAlert(Messages.CREATE_FAILED, 1700);
          }
        },
        error => {
          this.failedAlertService.triggerSaveFailedAlert(Messages.SERVER_ERROR, 2100);
          console.error('Error sending data', error);
        }
      );
    }
  }
}
