import {Component} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from "@angular/forms";
import {CrudTransactionService} from "../service/sell-other/crud-transactions/crud-transaction.service";

@Component({
  selector: 'app-sell-other',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './sell-other.component.html',
  styleUrl: './sell-other.component.scss'
})
export class SellOtherComponent {
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

  constructor(private crudService: CrudTransactionService) {
  }


  // save part
  postItem() {

    const formData = {
      title: this.partTitle,
      make: this.partMake,
      partNumber: this.partNumber,
      manufacturer: this.partManufacturer,
      oem: this.partOemAftermarket == "OEM" ? "Y" : null,
      aftermarket: this.partOemAftermarket == "Aftermarket" ? "Y" : null,
      condition: this.partCondition,
      description: this.partDescription,
      compatibility: this.partCompatibility,
      additionalInfo: this.partAdditionalInfo,
      price: this.partPrice,
      negotiable: this.partNegotiable
    };

    console.log(formData)

    // Call the service method to send data to Python backend
    this.crudService.saveOtherAccessory(formData).subscribe(
      response => {
        console.log('Data sent successfully', response);
      },
      error => {
        console.error('Error sending data', error);
      }
    );
  }
}
