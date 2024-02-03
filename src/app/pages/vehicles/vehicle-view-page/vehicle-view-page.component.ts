import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";

@Component({
  selector: 'app-vehicle-view-page',
  standalone: true,
  imports: [
    FormsModule,
    MatRadioButton,
    MatRadioGroup
  ],
  templateUrl: './vehicle-view-page.component.html',
  styleUrl: './vehicle-view-page.component.scss'
})
export class VehicleViewPageComponent {

}
