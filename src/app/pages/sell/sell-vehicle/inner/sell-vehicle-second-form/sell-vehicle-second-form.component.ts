import {Component, OnInit} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {Router} from '@angular/router';
import {DataSharingService} from "../../communication/data-sharing.service";
import {TransactionService} from "../../../service/sell-vehicles/transactions/transaction.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomAlertService} from "../../../../../shared/alerts/custom/custom-alert.service";
import {Messages} from "@common/parts/messages";

@Component({
  selector: 'app-sell-vehicle-second-form',
  standalone: true,
  imports: [MatRadioModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sell-vehicle-second-form.component.html',
  styleUrl: './sell-vehicle-second-form.component.scss'
})
export class SellVehicleSecondFormComponent implements OnInit {

  vehiclePrice: any;
  previousPageFormData: any;

  // Variable to store the selected images
  selectedImages: string[] = [];

  // Assuming you have a form group property
  sellVehicleSecondPage: FormGroup;


  constructor(private router: Router, private dataSharingService: DataSharingService,
              private transactionService: TransactionService,
              private customAlertService: CustomAlertService,private formBuilder: FormBuilder) {
    this.sellVehicleSecondPage = this.formBuilder.group({
      vehiclePrice: [null, Validators.required]
    });
  }

  ngOnInit(): void {

  }

  navigateToPreviousPage(path: string) {
    this.router.navigate([path]);
  }


  // ==================================================
  // Function to handle file input change
  handleFileInput(event: any) {
    const files: FileList = event.target.files;

    // Clear previous selected images
    this.selectedImages = [];

    // Add new selected images to the array
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.selectedImages.push(e.target.result);
      };

      reader.readAsDataURL(files[i]);
    }
  }

  setPreviousPageData() {
    this.previousPageFormData = this.dataSharingService.formData;
    console.log(this.previousPageFormData);
  }

  predictPrice() {
    this.previousPageFormData = this.dataSharingService.formData.value;
    console.log(this.previousPageFormData);

    const predictionDetails = {
      model: this.previousPageFormData.model,
      make: this.previousPageFormData.make,
      yom: this.previousPageFormData.yom,
      odometer: this.previousPageFormData.odometer,
      fuelType: this.previousPageFormData.fuelType
    }

    console.log(predictionDetails.odometer.type)

    this.transactionService.getPredictedPrice(predictionDetails).subscribe(
      (data) => {
        if (data.length < 0) {
          this.customAlertService.triggerCustomWarningAlert(Messages.NO_MATCHING_PREDICTIONS_FOUND,1700);
        } else {
          this.sellVehicleSecondPage.get('vehiclePrice')?.setValue(data);
        }
      },
      (error) => {
        console.error('Error predicting price ', error);
        this.customAlertService.triggerCustomWarningAlert(Messages.FAILED_TO_PREDICT_PRICE,1700);
      }
    );
  }
}
