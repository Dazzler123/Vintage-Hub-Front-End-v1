import { Component } from '@angular/core';
import {BgImageComponent} from "../bg-image/bg-image.component";

@Component({
  selector: 'app-main-slider',
  standalone: true,
  imports: [
    BgImageComponent
  ],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.scss'
})
export class MainSliderComponent {

}
