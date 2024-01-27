import { Component } from '@angular/core';
import {VehicleViewCardComponent} from "../../../shared/cards/vehicle-view-card/vehicle-view-card.component";

@Component({
  selector: 'app-buy-parts',
  standalone: true,
    imports: [
        VehicleViewCardComponent
    ],
  templateUrl: './buy-parts.component.html',
  styleUrl: './buy-parts.component.scss'
})
export class BuyPartsComponent {

}
