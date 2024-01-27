import {Component} from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {Router} from '@angular/router';
import {DataSharingService} from "./communication/data-sharing.service";
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-sell-vehicle',
  standalone: true,
  imports: [MatRadioModule, FormsModule],
  templateUrl: './sell-vehicle.component.html',
  styleUrl: './sell-vehicle.component.scss'
})


export class SellVehicleComponent {

  constructor(private router: Router, private dataSharingService: DataSharingService) {
  }

  resetForm(form: NgForm) {
    console.log("reset")
    form.reset();
  }

  navigateToNextPage(path: string, formData: NgForm) {
    this.dataSharingService.formData = formData;
    this.router.navigate([path]);
  }
}
