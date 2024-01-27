import { Component } from '@angular/core';
import {VehicleViewCardComponent} from "../../../shared/cards/vehicle-view-card/vehicle-view-card.component";
import {MainSliderComponent} from "./inner-items/main-slider/main-slider.component";
import {BgImageComponent} from "./inner-items/bg-image/bg-image.component";
import {BgSpeedoAnimationComponent} from "./inner-items/bg-speedo-animation/bg-speedo-animation.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    VehicleViewCardComponent,
    MainSliderComponent,
    BgImageComponent,
    BgSpeedoAnimationComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
