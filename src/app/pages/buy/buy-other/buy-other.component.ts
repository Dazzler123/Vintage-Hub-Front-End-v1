import { Component } from '@angular/core';
import {VehicleViewCardComponent} from "../../../shared/cards/vehicle-view-card/vehicle-view-card.component";

@Component({
  selector: 'app-buy-other',
  standalone: true,
    imports: [
        VehicleViewCardComponent
    ],
  templateUrl: './buy-other.component.html',
  styleUrl: './buy-other.component.scss'
})
export class BuyOtherComponent {

}
