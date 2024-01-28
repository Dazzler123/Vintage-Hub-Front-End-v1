import {Component} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from "@angular/forms";
import {CrudTransactionService} from "../service/sell-parts/crud-transactions/crud-transaction.service";
import {SaveSuccessAlertService} from "../../../shared/alerts/saved/save-success-alert.service";
import {SaveFailedAlertService} from "../../../shared/alerts/saved/save-failed-alert.service";
import {Messages} from "@common/parts/messages";

@Component({
  selector: 'app-sell-parts',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './sell-parts.component.html',
  styleUrls: ['./sell-parts.component.scss']
})

export class SellPartsComponent {

  // Define properties to store form data
  partTitle: string = '';
  partMake: string = '';
  partNumber: string = '';
  partManufacturer: string = '';
  partOemAftermarket: string = '';
  partCondition: string = '';
  // images: string[] = ;
  partDescription: string = '';
  partCompatibility: string = '';
  partAdditionalInfo: string = '';
  partPrice: number | null = null;
  partNegotiable: boolean = false;

  constructor(private crudService: CrudTransactionService, private successAlertService: SaveSuccessAlertService,
              private failedAlertService: SaveFailedAlertService) {
  }

  // save part
  postItem() {

    const formData = {
      title: this.partTitle,
      make: this.partMake,
      partNumber: this.partNumber,
      manufacturer: this.partManufacturer,
      oem: this.partOemAftermarket == "OEM" ? true : null,
      aftermarket: this.partOemAftermarket == "Aftermarket" ? true : null,
      condition: this.partCondition,
      description: this.partDescription,
      compatibility: this.partCompatibility,
      additionalInfo: this.partAdditionalInfo,
      price: this.partPrice,
      negotiable: this.partNegotiable
    };

    console.log(formData)

    // Call the service method to send data to Python backend
    this.crudService.saveSparePart(formData).subscribe(
      (success: boolean) => {
        if (success) {
          this.successAlertService.triggerSaveSuccessAlert(Messages.PART_SAVED, 1600);
          console.log('Data saved successfully');
        } else {
          this.failedAlertService.triggerSaveFailedAlert(Messages.PART_SAVE_FAILED, 1700);
        }
      },
      error => {
        this.failedAlertService.triggerSaveFailedAlert(Messages.PART_SAVE_FAILED, 2100);
        console.error('Error sending data', error);
      }
    );
  }
}
