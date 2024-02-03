import {Component} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {Router} from '@angular/router';
import {DataSharingService} from "./communication/data-sharing.service";
import {FormsModule, NgForm} from '@angular/forms';
import {NgForOf} from "@angular/common";
import {initializedMileageRanges, initializedYOMs} from "app/common/constants";

@Component({
  selector: 'app-sell-vehicle',
  standalone: true,
  imports: [MatRadioModule, FormsModule, NgForOf],
  templateUrl: './sell-vehicle.component.html',
  styleUrl: './sell-vehicle.component.scss'
})


export class SellVehicleComponent {

  makes: string[] = [];
  models: string[] = [];
  yoms: string[] = [];
  mileageRanges: string[] = [];
  selectedMake: string | undefined;
  selectedModel: string | undefined;

  constructor(private router: Router, private dataSharingService: DataSharingService) {
  }

  ngOnInit(): void {
    // load all vehicle makes to dropdown
    this.loadAllVehicleMakes();

    // set form default values
    this.selectedMake = 'Select Make';
    this.yoms = initializedYOMs();
    this.mileageRanges = initializedMileageRanges();
  }

  resetForm(form: NgForm) {
    console.log("reset")
    form.reset();
  }

  loadAllVehicleMakes() {
    this.dataSharingService.getVehicleMakes().subscribe(
      (data) => {
        this.makes = data;
      },
      (error) => {
        console.error('Error fetching vehicle makes', error);
      }
    );
  }

  loadVehicleModels() {
    this.dataSharingService.getVehicleModels(this.selectedMake).subscribe(
      (data) => {
        this.models = data;
      },
      (error) => {
        console.error('Error fetching vehicle makes', error);
      }
    );
  }

  navigateToNextPage(path: string, formData: NgForm) {
    this.dataSharingService.formData = formData;
    this.router.navigate([path]);
  }
}
