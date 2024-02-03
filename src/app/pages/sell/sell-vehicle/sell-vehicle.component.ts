import {Component} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {Router} from '@angular/router';
import {DataSharingService} from "./communication/data-sharing.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf} from "@angular/common";
import {initializedMileageRanges, initializedYOMs} from "app/common/constants";
import {TransactionService} from "../service/sell-vehicles/transactions/transaction.service";

@Component({
  selector: 'app-sell-vehicle',
  standalone: true,
  imports: [MatRadioModule, FormsModule, NgForOf, ReactiveFormsModule],
  templateUrl: './sell-vehicle.component.html',
  styleUrl: './sell-vehicle.component.scss'
})


export class SellVehicleComponent {

  makes: string[] = [];
  models: string[] = [];
  yoms: string[] = [];
  mileageRanges: string[] = [];
  make: string | undefined;
  // selectedMake: string | undefined;

  // model: string | undefined;
  // yom: string | undefined;
  // odometer: string | undefined;
  // fuelType: string | undefined;
  // mileage: string | undefined;
  // registrationNo: any;
  // engineCapacity: any;
  // transmission: any;
  // driveTrain: any;
  // horsepower: any;
  // exteriorColor: any;
  // bodyType: any;
  // wheelSize: any;
  // haveSunroof: any;
  // isConvertible: any;
  // interiorColor: any;
  // seatingCapacity: any;
  // infotainmentSys: any;
  // haveAirbags: any;
  // absType: any;
  // escType: any;
  // casType: any;
  sellVehicleFirstPage: FormGroup | any;

  constructor(private router: Router, private transactionService: TransactionService,
              private dataSharingService: DataSharingService, private builder: FormBuilder) {
  }

  ngOnInit(): void {
    // load all vehicle makes to dropdown
    this.loadAllVehicleMakes();

    // set form default values
    this.make = 'Select Make';
    this.yoms = initializedYOMs();
    this.mileageRanges = initializedMileageRanges();

    // ===================================================================
    this.sellVehicleFirstPage = this.builder.group({
      make: ['', Validators.required],
      model: [],
      yom: ['', Validators.required],
      odometer: ['', Validators.required],
      fuelType: [''],
      mileage: [''],
      registrationNo: ['', Validators.required],
      engineCapacity: ['', Validators.required],
      transmission:['', Validators.required],
      driveTrain: [''],
      horsepower: [''],
      exteriorColor: [''],
      bodyType: [''],
      wheelSize: [''],
      haveSunroof: [''],
      isConvertible: [''],
      interiorColor: [''],
      seatingCapacity: [''],
      infotainmentSys: [''],
      haveAirbags: [''],
      absType: [''],
      escType: [''],
      casType: [''],
    });
  }

  resetForm(form: FormGroup) {
    console.log("reset")
    form.reset();
  }

  loadAllVehicleMakes() {
    this.transactionService.getVehicleMakes().subscribe(
      (data) => {
        this.makes = data;
      },
      (error) => {
        console.error('Error fetching vehicle makes', error);
      }
    );
  }

  loadVehicleModels() {
    console.log(this.make)
    this.transactionService.getVehicleModels(this.make).subscribe(
      (data) => {
        this.models = data;
      },
      (error) => {
        console.error('Error fetching vehicle makes', error);
      }
    );
  }

  navigateToNextPage(path: string, formData: FormGroup) {
    if (this.sellVehicleFirstPage) {
      this.dataSharingService.formData = formData;
    } else {
      console.error('Form group is not initialized properly.');
    }
    this.router.navigate([path]);
  }
}
