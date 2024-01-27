import {Component} from '@angular/core';

@Component({
  selector: 'app-bg-speedo-animation',
  standalone: true,
  imports: [],
  templateUrl: './bg-speedo-animation.component.html',
  styleUrls: ['./bg-speedo-animation.component.scss'],
})
export class BgSpeedoAnimationComponent {

  constructor() {
    // Call the updateSpeedDisplay function every 100 milliseconds
    setInterval(() => this.updateSpeedDisplay(), 100);
  }

// Function to calculate the current speed based on the stroke-dashoffset
  calculateSpeed() {

    // Get the element
    let meterBar = document.getElementById("meter-bg-bar");

    let speed = 0;
    // Check if the element is not null before proceeding
    if (meterBar) {
      // Get the current stroke-dashoffset
      let strokeDashoffset = parseFloat(
        window.getComputedStyle(meterBar).getPropertyValue("stroke-dashoffset")
      );
      // Calculate the current speed based on the stroke-dashoffset
      // The maximum stroke-dashoffset is 615, which corresponds to a speed of 0 km/h
      // The minimum stroke-dashoffset is 0, which corresponds to a speed of 180 km/h
      speed = ((615 - strokeDashoffset) / 615) * 180;
      // Round the speed to the nearest integer
      speed = Math.round(speed);
    }
    return speed;
  }

  // Function to update the speed display
  updateSpeedDisplay() {
    // Calculate the current speed
    let speed = this.calculateSpeed();
    // Get the speed display element
    let speedDisplay = document.getElementById("speed");

    // Update the text content of the speed display element
    if (speedDisplay) {
      // @ts-ignore
      speedDisplay.textContent = speed.toString();
    }
  }

}
