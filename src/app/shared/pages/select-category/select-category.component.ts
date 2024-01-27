import {Component} from '@angular/core';
import {VehicleViewCardComponent} from "../../cards/vehicle-view-card/vehicle-view-card.component";
import {SelectCategoryCardComponent} from "../../cards/select-category-card/select-category-card.component";
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-select-category',
  standalone: true,
  imports: [
    VehicleViewCardComponent,
    SelectCategoryCardComponent
  ],
  templateUrl: './select-category.component.html',
  styleUrl: './select-category.component.scss'
})
export class SelectCategoryComponent {

  actionType: string = ''; //buy or sell

  vehicleDesc = "Explore a curated collection of classic cars for sale or list your vintage vehicle for" +
    " others to discover and acquire.";
  partsDesc = "Find, sell, or browse through an extensive range of spare parts for classic vehicles." +
    " Everything you need for your automotive restoration projects.";
  otherAccessoriesDesc = "Discover unique and stylish accessories to enhance your classic vehicle. Buy, sell," +
    " or explore exclusive additions for a personalized touch.";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.actionType = params['id'];
    });
  }

}
