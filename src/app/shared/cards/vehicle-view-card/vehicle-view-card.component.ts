import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-vehicle-view-card',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-view-card.component.html',
  styleUrl: './vehicle-view-card.component.scss'
})
export class VehicleViewCardComponent {
  vehicleId: string | undefined;

  constructor(private router: Router) {
  }

  navigateToDetailView(path: string, vehicle: string | undefined) {
    this.router.navigate([path + vehicle]);
  }

}
