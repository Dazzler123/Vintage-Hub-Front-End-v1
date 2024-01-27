import { Component } from '@angular/core';
import {
  BgSpeedoAnimationComponent
} from "../../home/home-page/inner-items/bg-speedo-animation/bg-speedo-animation.component";
import {SelectCategoryCardComponent} from "../../../shared/cards/select-category-card/select-category-card.component";
import {VehicleViewCardComponent} from "../../../shared/cards/vehicle-view-card/vehicle-view-card.component";

@Component({
  selector: 'app-buy-vehicle',
  standalone: true,
  imports: [
    BgSpeedoAnimationComponent,
    SelectCategoryCardComponent,
    VehicleViewCardComponent
  ],
  templateUrl: './buy-vehicle.component.html',
  styleUrl: './buy-vehicle.component.scss'
})
export class BuyVehicleComponent {
  vehicles: any;

}
