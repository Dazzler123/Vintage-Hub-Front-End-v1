import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CrudTransactionService} from "../../sell/service/user-account/crud-transaction.service";
import {SaveSuccessAlertService} from "../../../shared/alerts/saved/save-success-alert.service";
import {SaveFailedAlertService} from "../../../shared/alerts/saved/save-failed-alert.service";
import {Messages} from "@common/parts/messages";
import {Resources} from "@common/resources";

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {

  userFullName: string = '';
  userAddress: string = '';
  userNic: string = '';
  userEmailAddress: string = '';
  userContactNo: string = '';
  userDLNo: string = '';
  userGender: any = '';
  userNicImage: string = '';
  userNewUserName: string = '';
  userNewPassword: number | null = null;

  constructor(private router: Router, private crudService: CrudTransactionService, private successAlertService: SaveSuccessAlertService,
              private failedAlertService: SaveFailedAlertService) {
  }


  // create account
  createUserAccount() {

    const formData = {
      name: this.userFullName,
      address: this.userAddress,
      nic: this.userNic,
      email: this.userEmailAddress,
      contactNo: this.userContactNo,
      drivingLicenseNo: this.userDLNo,
      gender: this.userGender,
      username: this.userNewUserName,
      password: this.userNewPassword,
    };

    console.log(formData)

    this.crudService.createUserAccount(formData).subscribe(
      (success: boolean) => {
        if (success) {
          this.successAlertService.triggerSaveSuccessAlert(Messages.ACCOUNT_CREATED, 1600);
          console.log('Data saved successfully');

          //navigate to homepage
          this.router.navigate([Resources.HOME_PAGE_PATH]);
        } else {
          this.failedAlertService.triggerSaveFailedAlert(Messages.ACCOUNT_CREATION_FAILED, 1700);
        }
      },
      error => {
        this.failedAlertService.triggerSaveFailedAlert(Messages.SERVER_ERROR, 2100);
        console.error('Error sending data', error);
      }
    );
  }
}
